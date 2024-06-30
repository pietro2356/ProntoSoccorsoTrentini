import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, finalize, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { AppStateService } from '@core/services/appState/app-state.service';

let requestCounter = 0;

export const loadingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  requestCounter++;
  const stateService = inject(AppStateService);
  stateService.setLoading();

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      stateService.setError(error.message);
      // requestCounter--; FIX: DEVO METTERLO???????????????
      return throwError(() => error);
    }),
    finalize(() => {
      requestCounter--;
      // TODO: DEvo mettere il decremento anche sopra????
      if (requestCounter === 0 && !stateService.isStatusError()) stateService.setReady();
    })
  );
};

