import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCoreService {
  #http = inject(HttpClient);

  public get<T = unknown>(url: string): Observable<T> {
    return this.#http.get<T>(url).pipe(retry(3));
  }

  public post<T = unknown>(url: string, body: unknown): Observable<T> {
    return this.#http.post<T>(url, body).pipe(retry(3));
  }

  public put<T = unknown>(url: string, body: unknown): Observable<T> {
    return this.#http.put<T>(url, body).pipe(retry(3));
  }

  public delete<T = unknown>(url: string): Observable<T> {
    return this.#http.delete<T>(url).pipe(retry(3));
  }

  public patch<T = unknown>(url: string, body: unknown): Observable<T> {
    return this.#http.patch<T>(url, body).pipe(retry(3));
  }

  public head<T = unknown>(url: string): Observable<T> {
    return this.#http.head<T>(url).pipe(retry(3));
  }

  public options<T = unknown>(url: string): Observable<T> {
    return this.#http.options<T>(url);
  }
}
