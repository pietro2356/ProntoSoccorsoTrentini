import { computed, Injectable, signal } from '@angular/core';

/**
 * Stato: READY | LOADING | ERROR
 */

export type TState = 'READY' | 'LOADING' | 'ERROR';
export interface IState {
  state: TState;
  error: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  #appState = signal<IState>({ state: 'READY', error: null });

  public appState = computed<IState>(() => {
    return this.#appState();
  });

  public get state(): TState {
    return this.#appState().state;
  }

  public get error(): string | null {
    return this.#appState().error;
  }

  public setReady(): void {
    this.#appState.update(() => ({ state: 'READY', error: null }));
  }

  public setLoading(): void {
    this.#appState.update(() => ({ state: 'LOADING', error: null }));
  }

  public setError(error: string): void {
    this.#appState.update(() => ({ state: 'ERROR', error }));
  }

  public isStatusLoading(): boolean {
    return this.#appState().state === 'LOADING';
  }

  public isStatusError(): boolean {
    return this.#appState().state === 'ERROR';
  }

  public isStatusReady(): boolean {
    return this.#appState().state === 'READY';
  }
}
