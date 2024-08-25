import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpCoreService } from '@core/services/http/http-core.service';
import { catchError, finalize } from 'rxjs';
import { environment } from '@env/environment';
import { CodiceIdPS, ProntoSoccorso, StatoProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { AppStateService } from '@core/services/appState/app-state.service';
import { FavoritesService } from '@core/services/favorites/favorites.service';
import { PSDetail, psDetails } from '@core/data/ps-details';

@Injectable({
  providedIn: 'root',
})
export class StatoPSService {
  /* ---- SERVIZI ESTERNI ---- */
  readonly #httpCore = inject(HttpCoreService);
  readonly #appStateService = inject(AppStateService);
  readonly #favoritesService = inject(FavoritesService);

  /* ---- SIGNAL INTERNI PER LA GESTIONE DEI PRONTO SOCCORSO ---- */
  readonly #prontoSoccorso = signal<ProntoSoccorso[]>([]);
  readonly #valoreDiRicercaPS = signal<string>('');
  readonly #dataAggiornamento = signal<string>('');
  readonly #prontoSoccorsoFav = signal<ProntoSoccorso[]>([]);

  /* ---- SIGNAL PUBBLICI READONLY PER ESPORRE I DATI ---- */
  public readonly prontoSoccorso = computed<ProntoSoccorso[]>(() => {
    if (this.#valoreDiRicercaPS() === null) return this.#prontoSoccorso();
    if (this.#valoreDiRicercaPS().length < 3) return this.#prontoSoccorso();
    return this.#prontoSoccorso().filter(
      ps => ps.localita === this.#valoreDiRicercaPS() || ps.codPsOd === this.#valoreDiRicercaPS()
    );
  });
  public readonly dataAggiornamento = computed<string>(() => {
    return this.#dataAggiornamento();
  });
  public readonly listaLocalita = computed<string[]>(() => {
    return Array.from(new Set(this.#prontoSoccorso().map(ps => ps.localita)));
  });

  public readonly prontoSoccorsoFav = computed<ProntoSoccorso[]>(() => {
    return this.#prontoSoccorsoFav();
  });

  /* ---- METODI PUBBLICI ---- */
  /**
   * Filtra i pronto soccorso in base alla località
   * @param localita
   */
  public filterPS(localita: string) {
    this.#valoreDiRicercaPS.set(localita);
  }

  /**
   * Rimuove il filtro sulla località
   */
  public clearFilterPS() {
    this.#valoreDiRicercaPS.set('');
  }

  /**
   * Carica lo stato del pronto soccorso
   */
  public loadStatoPS() {
    this.#appStateService.setLoading();
    this.#httpCore
      .get<StatoProntoSoccorso>(environment.apiTrentinoAA)
      .pipe(
        catchError(err => {
          this.#appStateService.setError(err.message);
          throw err;
        }),
        finalize(() => {
          this.#appStateService.setReady();
        })
      )
      .subscribe((data: StatoProntoSoccorso) => {
        this.#prontoSoccorso.set(data.prontoSoccorso);
        this.#dataAggiornamento.set(data.dataAggiornamento);
        this.loadFavPS();
        this.updatePSInfo();
      });
  }

  private updatePSInfo() {
    this.#prontoSoccorso().forEach(ps => {
      ps.dettagli = this.addPsDetail(ps);
    });
  }

  private addPsDetail(ps: ProntoSoccorso): PSDetail {
    return psDetails.find(detail => detail.id === ps.codPsOd) ?? psDetails[psDetails.length - 1];
  }

  /**
   * Aggiunge un pronto soccorso ai preferiti
   * @param codiceIdPS codiceId del pronto soccorso
   */
  public findPS(codiceIdPS: CodiceIdPS): ProntoSoccorso | false {
    return this.#prontoSoccorso().find(ps => ps.codPsOd === codiceIdPS) ?? false;
  }

  /**
   * Carica i pronto soccorso preferiti
   */
  public loadFavPS() {
    if (this.#prontoSoccorso().length === 0) this.loadStatoPS();
    this.#prontoSoccorsoFav.set(
      this.#favoritesService
        .favorites()
        .map(codiceIdPS => this.findPS(codiceIdPS))
        .filter(ps => ps !== false) as ProntoSoccorso[]
    );
  }
}
