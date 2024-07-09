import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { HttpCoreService } from '@core/services/http/http-core.service';
import { catchError, Observable } from 'rxjs';
import { environment } from '@env/environment';
import { StatoProntoSoccorso } from '@core/models/statoProntoSoccorso';
import { AppStateService } from '@core/services/appState/app-state.service';


@Injectable({
  providedIn: 'root'
})
export class StatoPSService {
  #httpCore = inject(HttpCoreService);
  #appStateService = inject(AppStateService);

  #statoPS = signal<StatoProntoSoccorso>({
    dataAggiornamento: '',
    prontoSoccorso: []
  });

  public readonly statoPS = computed<StatoProntoSoccorso>(() => {return this.#statoPS();});

  public getStatoPS(): Observable<StatoProntoSoccorso> {
    return this.#httpCore.get<StatoProntoSoccorso>(environment.apiTrentinoAA);
  }

  public getStatPS(): void {
    this.#appStateService.setLoading();
    this.#httpCore.get<StatoProntoSoccorso>(environment.apiTrentinoAA)
      .pipe(
        catchError((err) => {
          this.#appStateService.setError(err.message);
          throw err;
        }),
      )
      .subscribe((data: StatoProntoSoccorso) => {
        this.#statoPS.set(data);
        this.#appStateService.setReady();
      });

  }
}
