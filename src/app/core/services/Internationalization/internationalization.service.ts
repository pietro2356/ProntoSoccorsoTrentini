import { computed, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@codeandweb/ngx-translate';
import { TLang } from '@core/models/TLang';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class InternationalizationService {
  readonly #translateService = inject(TranslateService);

  readonly #supportedLanguages = signal<TLang[]>(environment.supportedLanguages);
  public availLangFlag = computed<string[]>(() => this.#supportedLanguages().map(lang => lang.flag));

  selectedLanguageFlag = computed(() => {
    const selectedLangCode = this.#translateService.currentLang.toUpperCase();
    const selectedLang = this.#supportedLanguages().find(lang => lang.code.toUpperCase() === selectedLangCode);
    return selectedLang?.flag;
  });

  constructor() {}

  public changeLanguageWithCode(langCode: string): void {
    this.#translateService.use(langCode);
  }

  public changeLanguageWithFlag(langFlag: string): void {
    const selectedLang = this.#supportedLanguages().find(lang => lang.flag === langFlag);
    if (selectedLang) {
      this.#translateService.use(selectedLang.code);
    }
  }

  public initCurrentLangFromDefaultLang(): void {
    this.changeLanguageWithCode(this.#translateService.getBrowserLang() ?? this.#translateService.defaultLang);
  }

  public logInfo(): void {
    console.log('Supported Lang: ', this.#supportedLanguages());
    console.log('Current Lang: ', this.#translateService.currentLang);
    console.log('Default Lang: ', this.#translateService.defaultLang);
    console.log('Browser Lang: ', this.#translateService.getBrowserLang());
  }
}
