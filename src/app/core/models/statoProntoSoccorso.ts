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

export type ProntoSoccorso = {
  tipo: string;
  dataAggiornamento: string;
  codPsOd: string;
  codOspOd: string;
  ps: string;
  unitaOperativa: string;
  localita: string;
  attesa: Attesa;
  ambulatorio: Ambulatorio;
  osservazione: Osservazione;
  attesaMedia: AttesaMedia;
  direttore: string;
  messaggio: string;
};

export type StatoProntoSoccorso = {
  dataAggiornamento: string;
  prontoSoccorso: ProntoSoccorso[];
};
