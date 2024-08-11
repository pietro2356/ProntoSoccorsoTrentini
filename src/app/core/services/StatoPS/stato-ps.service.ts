import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpCoreService } from '@core/services/http/http-core.service';
import { catchError, finalize } from 'rxjs';
import { environment } from '@env/environment';
import { CodiceIdPS, ProntoSoccorso, StatoProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { AppStateService } from '@core/services/appState/app-state.service';
import { FavoritesService } from '@core/services/favorites/favorites.service';

@Injectable({
  providedIn: 'root',
})
export class StatoPSService {
  #httpCore = inject(HttpCoreService);
  #appStateService = inject(AppStateService);
  #favoritesService = inject(FavoritesService);

  #prontoSoccorso = signal<ProntoSoccorso[]>([]);
  #prontoSoccorsoFiltered = signal<ProntoSoccorso[]>([]);
  #dataAggiornamento = signal<string>('');
  #prontoSoccorsoFav = signal<ProntoSoccorso[]>([]);

  public readonly prontoSoccorso = computed<ProntoSoccorso[]>(() => {
    return this.#prontoSoccorsoFiltered();
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

  public filterPS(localita: string) {
    if (localita === null) {
      this.#prontoSoccorsoFiltered.set(this.#prontoSoccorso());
      return;
    }
    if (localita.length < 3) return;
    this.#prontoSoccorsoFiltered.set(this.#prontoSoccorso().filter(ps => ps.localita === localita));
  }

  public clearFilterPS() {
    this.#prontoSoccorsoFiltered.set(this.#prontoSoccorso());
  }

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
        this.#prontoSoccorsoFiltered.set(data.prontoSoccorso);
        this.#dataAggiornamento.set(data.dataAggiornamento);
        this.loadFavPS();
      });
  }

  // prontoSoccorsoFav()
  private findPS(codiceIdPS: CodiceIdPS): ProntoSoccorso | false {
    return this.#prontoSoccorso().find(ps => ps.codPsOd === codiceIdPS) ?? false;
  }

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
