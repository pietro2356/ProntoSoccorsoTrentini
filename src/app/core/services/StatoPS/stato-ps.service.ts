import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpCoreService } from '@core/services/http/http-core.service';
import { catchError, finalize } from 'rxjs';
import { CodiceIdPS, ProntoSoccorso, StatoProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { AppStateService } from '@core/services/appState/app-state.service';
import { FavoritesService } from '@core/services/favorites/favorites.service';
import { PSDetail, psDetails } from '@core/data/ps-details';
import { API_URL } from '@core/token/api-url.token';

/**
 * # StatoPS Service
 * Servizio usato per il recupero dello stato di un PS.
 *
 * ## tip
 * lorem ipsum
 */
@Injectable({
  providedIn: 'root',
})
export class StatoPSService {
  /* ---- SERVIZI ESTERNI ---- */
  readonly #httpCore = inject(HttpCoreService);
  readonly #appStateService = inject(AppStateService);
  readonly #favoritesService = inject(FavoritesService);
  readonly #API_URL = inject(API_URL);

  /* ---- SIGNAL INTERNI PER LA GESTIONE DEI PRONTO SOCCORSO ---- */
  /**
   * Lista originale dei pronto soccorso
   * @private
   */
  readonly #prontoSoccorso = signal<ProntoSoccorso[]>([]);

  /**
   * Valore di ricerca per il pronto soccorso
   * @private
   */
  readonly #valoreDiRicercaPS = signal<string>('');

  /**
   * Data di aggiornamento dello stato del pronto soccorso
   * @private
   */
  readonly #dataAggiornamento = signal<string>('');

  /**
   * Lista originale dei pronto soccorso preferiti
   * @private
   */
  readonly #prontoSoccorsoFav = signal<ProntoSoccorso[]>([]);

  /* ---- SIGNAL PUBBLICI READONLY PER ESPORRE I DATI ---- */
  /**
   * Lista dei pronto soccorso
   */
  public readonly prontoSoccorso = computed<ProntoSoccorso[]>(() => {
    if (this.#valoreDiRicercaPS() === null) return this.#prontoSoccorso().sort((a, b) => this.compareLocalita(a, b));
    if (this.#valoreDiRicercaPS().length < 3) return this.#prontoSoccorso().sort((a, b) => this.compareLocalita(a, b));
    return this.#prontoSoccorso()
      .filter(ps => ps.localita === this.#valoreDiRicercaPS() || ps.codPsOd === this.#valoreDiRicercaPS())
      .sort((a, b) => this.compareLocalita(a, b));
  });

  /**
   * Data di aggiornamento dello stato del pronto soccorso
   */
  public readonly dataAggiornamento = computed<string>(() => {
    return this.#dataAggiornamento();
  });

  /**
   * Lista delle località dei pronto soccorso
   */
  public readonly listaLocalita = computed<string[]>(() => {
    return Array.from(new Set(this.#prontoSoccorso().map(ps => ps.localita))).sort();
  });

  /**
   * Lista dei pronto soccorso preferiti
   */
  public readonly prontoSoccorsoFav = computed<ProntoSoccorso[]>(() => {
    return this.#prontoSoccorsoFav();
  });

  /**
   * Confronta due pronto soccorso in base alla località
   * @param a ProntoSoccorso da cui estrarre la localtà
   * @param b ProntoSoccorso da cui estrarre la localtà
   * @private
   */
  private compareLocalita(a: ProntoSoccorso, b: ProntoSoccorso) {
    if (a.localita < b.localita) return -1;
    if (a.localita > b.localita) return 1;
    return 0;
  }

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
      .get<StatoProntoSoccorso>(this.#API_URL)
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

  /**
   * Aggiunge i dettagli di ogni pronto soccorso
   * @private
   */
  private updatePSInfo() {
    this.#prontoSoccorso().forEach(ps => {
      ps.dettagli = this.addPsDetail(ps);
    });
  }

  /**
   * Aggiunge i dettagli di un pronto soccorso
   * @param ps
   * @private
   */
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
