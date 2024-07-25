import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpCoreService } from '@core/services/http/http-core.service';
import { catchError, finalize } from 'rxjs';
import { environment } from '@env/environment';
import { ProntoSoccorso, StatoProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { AppStateService } from '@core/services/appState/app-state.service';

@Injectable({
  providedIn: 'root',
})
export class StatoPSService {
  #httpCore = inject(HttpCoreService);
  #appStateService = inject(AppStateService);

  #prontoSoccorso = signal<ProntoSoccorso[]>([]);
  #prontoSoccorsoFiltered = signal<ProntoSoccorso[]>([]);
  #dataAggiornamento = signal<string>('');

  public readonly prontoSoccorso = computed<ProntoSoccorso[]>(() => {
    return this.#prontoSoccorsoFiltered();
  });
  public readonly dataAggiornamento = computed<string>(() => {
    return this.#dataAggiornamento();
  });
  public readonly listaLocalita = computed<string[]>(() => {
    return Array.from(new Set(this.#prontoSoccorso().map(ps => ps.localita)));
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
      });
  }
}
