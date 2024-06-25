import { inject, Injectable} from '@angular/core';
import { HttpCoreService } from '@core/services/http/http-core.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class StatoPSService {

  #httpCore = inject(HttpCoreService);

  public getStatoPS<StatoProntoSoccorso>(): Observable<StatoProntoSoccorso> {
    return this.#httpCore.get<StatoProntoSoccorso>(environment.apiTrentinoAA);
  }
}
