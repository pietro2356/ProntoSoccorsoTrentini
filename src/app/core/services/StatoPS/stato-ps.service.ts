import { inject, Injectable} from '@angular/core';
import { HttpCoreService } from '@core/services/http/http-core.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { StatoProntoSoccorso } from '@core/models/statoProntoSoccorso';

@Injectable({
  providedIn: 'root'
})
export class StatoPSService {

  #httpCore = inject(HttpCoreService);

  public getStatoPS(): Observable<StatoProntoSoccorso> {
    return this.#httpCore.get<StatoProntoSoccorso>(environment.apiTrentinoAA);
  }
}
