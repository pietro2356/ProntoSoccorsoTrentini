import { computed, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@codeandweb/ngx-translate';
import { TLang } from '@core/models/TLang';
import { SUPPORTED_LANGUAGES } from '@core/token/lang-i18n.token';

/**
 * @description Servizio per la gestione dell'internazionalizzazione dell'applicazione
 */
@Injectable({
  providedIn: 'root',
})
export class InternationalizationService {
  /**
   * @description Servizio per la traduzione delle stringhe fornito dalla libreria ngx-translate
   * @private
   */
  readonly #translateService = inject(TranslateService);

  /**
   * @description Signal contenente la lista delle lingue `TLang` supportate dall'applicazione lette dall'environment
   * @private
   */
  readonly #supportedLanguages = signal<TLang[]>(inject(SUPPORTED_LANGUAGES));

  /**
   * @description Signal contenente le bamdere delle lingue supportate dall'applicazione
   */
  public availLangFlag = computed<string[]>(() => this.#supportedLanguages().map(lang => lang.flag));

  /**
   * @description Signal contenente la bandiera della lingua selezionata
   */
  selectedLanguageFlag = computed(() => {
    const selectedLangCode = this.#translateService.currentLang.toUpperCase();
    const selectedLang = this.#supportedLanguages().find(lang => lang.code.toUpperCase() === selectedLangCode);
    return selectedLang?.flag;
  });

  constructor() {}

  /**
   * @description Cambia la lingua dell'applicazione in base al codice della lingua come: `en`, `it`, ecc.
   * @param langCode Codice della lingua
   */
  public changeLanguageWithCode(langCode: string): void {
    this.#translateService.use(langCode);
  }

  /**
   * @description Cambia la lingua dell'applicazione in base alla bandiera della lingua come: `🇮🇹`, `🇬🇧`, ecc.
   * @param langFlag Bandiera della lingua
   */
  public changeLanguageWithFlag(langFlag: string): void {
    const selectedLang = this.#supportedLanguages().find(lang => lang.flag === langFlag);
    if (selectedLang) {
      this.#translateService.use(selectedLang.code);
    }
  }

  /**
   * @description Inizializza la lingua corrente con la lingua di default.
   * Se la lingua del browser non è supportata, viene utilizzata la lingua di default.
   */
  public initCurrentLangFromDefaultLang(): void {
    this.changeLanguageWithCode(this.#translateService.getBrowserLang() ?? this.#translateService.defaultLang);
  }
}
