import { PSDetail } from '@core/data/ps-details';

export type Attesa = {
  bianco: number;
  verde: number;
  giallo: number;
  rosso: number;
  azzurro: number;
  arancio: number;
};

export type Ambulatorio = {
  bianco: number;
  verde: number;
  giallo: number;
  rosso: number;
  azzurro: number;
  arancio: number;
};

export type Osservazione = {
  bianco: number;
  verde: number;
  giallo: number;
  rosso: number;
  azzurro: number;
  arancio: number;
};

export type AttesaMedia = {
  bianco: number;
  verde: number;
  giallo: number;
  rosso: number;
  azzurro: number;
  arancio: number;
};

export type CodiceIdPS = string;

export type ProntoSoccorso = {
  tipo: string;
  dataAggiornamento: string;
  codPsOd: string;
  codOspOd: CodiceIdPS;
  ps: string;
  unitaOperativa: string;
  localita: string;
  attesa: Attesa;
  ambulatorio: Ambulatorio;
  osservazione: Osservazione;
  attesaMedia: AttesaMedia;
  direttore: string;
  messaggio: string;
  dettagli: PSDetail;
  accuratezzaDati: 'OK' | 'KO';
};

export type StatoProntoSoccorso = {
  dataAggiornamento: string;
  prontoSoccorso: ProntoSoccorso[];
};
