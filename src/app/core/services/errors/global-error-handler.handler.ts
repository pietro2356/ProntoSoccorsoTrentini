import { ErrorHandler, inject, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AppStateService } from '@core/services/appState/app-state.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {
  #appState = inject(AppStateService);
  handleError<T>(error: T): void {
    if (error instanceof HttpErrorResponse) {
      this.#appState.setError(error.message);
    } else {
      this.#appState.setError((error as Error).message);
    }
  }
}
