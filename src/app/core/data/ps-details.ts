export type Contatti = {
  telefono: string[];
  email: string[];
  pec: string;
};

export type Sede = {
  indirizzo: string;
};

export type PSDetail = {
  id: string;
  contatti: Contatti;
  sede: Sede;
  link: string;
};

// 005-PS-PS
const psCles: PSDetail = {
  id: '005-PS-PS',
  contatti: {
    telefono: ['+39 0463 660227'],
    email: ['prontosoccorsocles@apss.tn.it'],
    pec: 'distretto.ovest@pec.apss.tn.it',
  },
  sede: {
    indirizzo: 'Viale Alcide Degasperi, 31 - 38023 Cles',
  },
  link: 'https://www.apss.tn.it/Azienda/Unita-operative-e-strutture-organizzative/Struttura-semplice-pronto-soccorso-Cles',
} as const;

// 014-PS-PS
const psCavalese: PSDetail = {
  id: '014-PS-PS',
  contatti: {
    telefono: ['+39 0462 242204'],
    email: ['ufficioaccettazionefiemme@apss.tn.it'],
    pec: 'distretto.est@pec.apss.tn.it',
  },
  sede: {
    indirizzo: 'Via dei Dossi, 21 - 38033 Cavalese',
  },
  link: 'https://www.apss.tn.it/Azienda/Unita-operative-e-strutture-organizzative/Struttura-semplice-pronto-soccorso-Cavalese',
} as const;

// 004-PS-PS
const psBorgoValsugana: PSDetail = {
  id: '004-PS-PS',
  contatti: {
    telefono: ['+39 0461 755111', '+39 0461 755155'],
    email: ['dimitri.peterlana@apss.tn.it', 'psborgo@apss.tn.it'],
    pec: 'distretto.est@pec.apss.tn.it',
  },
  sede: {
    indirizzo: 'Corso Vicenza, 9 - 38051 Borgo Valsugana',
  },
  link: 'https://www.apss.tn.it/Azienda/Unita-operative-e-strutture-organizzative/Struttura-semplice-pronto-soccorso-Borgo-Valsugana',
} as const;

// 010-PS-PS
const psArco: PSDetail = {
  id: '010-PS-PS',
  contatti: {
    telefono: ['+39 0464 582622'],
    email: ['cristina.carnesecchi@apss.tn.it'],
    pec: 'distretto.centrosud@pec.apss.tn.it',
  },
  sede: {
    indirizzo: 'Viale dei Capitelli, 48 - 38062 Arco',
  },
  link: 'https://www.apss.tn.it/Azienda/Unita-operative-e-strutture-organizzative/Struttura-semplice-pronto-soccorso-Arco',
} as const;

// 007-PS-PS
const psTione: PSDetail = {
  id: '007-PS-PS',
  contatti: {
    telefono: ['+39 0465 331555', '+39 0465 331334'],
    email: ['prontosoccorsotione@apss.tn.it'],
    pec: 'distretto.centrosud@pec.apss.tn.it',
  },
  sede: {
    indirizzo: 'Via Ospedale, 11 - 38079 Tione di Trento',
  },
  link: 'https://www.apss.tn.it/Azienda/Unita-operative-e-strutture-organizzative/Struttura-semplice-pronto-soccorso-Tione',
} as const;

// 006-PS-PS
const psRovereto: PSDetail = {
  id: '006-PS-PS',
  contatti: {
    telefono: ['+39 0464 403205'],
    email: ['fabio.malalan@apss.tn.it', 'mara.dalbosco@apss.tn.it'],
    pec: 'ospedale.rovereto@pec.apss.tn.it',
  },
  sede: {
    indirizzo: 'Corso Verona, 4 - 38068 Rovereto',
  },
  link: 'https://www.apss.tn.it/Azienda/Unita-operative-e-strutture-organizzative/Unita-operativa-medicina-d-urgenza-e-pronto-soccorso-Rovereto',
} as const;

// -- TRENTO --
const contattiTrento: Contatti = {
  telefono: ['+ 39 0461 902665'],
  email: ['pstrento@apss.tn.it'],
  pec: 'ospedale.trento@pec.apss.tn.it',
} as const;
const sedeTrento: Sede = {
  indirizzo: "Largo medaglie d'oro, 9 - 38122 Trento",
} as const;

// 001-PS-PS
const psTrentoBase: PSDetail = {
  id: '001-PS-PS',
  contatti: contattiTrento,
  sede: sedeTrento,
  link: 'https://www.apss.tn.it/Azienda/Unita-operative-e-strutture-organizzative/Unita-operativa-medicina-d-urgenza-e-pronto-soccorso-Trento',
} as const;

// 001-PS-PSP
const psTrentoPediatrico: PSDetail = {
  id: '001-PS-PSP',
  contatti: contattiTrento,
  sede: sedeTrento,
  link: 'https://www.apss.tn.it/Azienda/Unita-operative-e-strutture-organizzative/Unita-operativa-medicina-d-urgenza-e-pronto-soccorso-Trento',
} as const;

// 001-PS-PSO
const psTrentoOrtopedico: PSDetail = {
  id: '001-PS-PSO',
  contatti: contattiTrento,
  sede: sedeTrento,
  link: 'https://www.apss.tn.it/Azienda/Unita-operative-e-strutture-organizzative/Unita-operativa-medicina-d-urgenza-e-pronto-soccorso-Trento',
} as const;

// 001-PS-PSG
const psTrentoGinecologico: PSDetail = {
  id: '001-PS-PSG',
  contatti: contattiTrento,
  sede: sedeTrento,
  link: 'https://www.apss.tn.it/Azienda/Unita-operative-e-strutture-organizzative/Unita-operativa-medicina-d-urgenza-e-pronto-soccorso-Trento',
} as const;

// 001-PS-PSC
const psTrentoOculistico: PSDetail = {
  id: '001-PS-PSC',
  contatti: contattiTrento,
  sede: sedeTrento,
  link: 'https://www.apss.tn.it/Azienda/Unita-operative-e-strutture-organizzative/Unita-operativa-medicina-d-urgenza-e-pronto-soccorso-Trento',
} as const;

const psNoData: PSDetail = {
  id: '404-PS-PS-ND',
  contatti: {
    telefono: [],
    email: [],
    pec: '',
  },
  sede: {
    indirizzo: '',
  },
  link: '',
} as const;

// -- LISTA DETTAGLI PRONTO SOCCORSO --
export const psDetails: PSDetail[] = [
  psCles,
  psCavalese,
  psBorgoValsugana,
  psArco,
  psTione,
  psRovereto,
  psTrentoBase,
  psTrentoPediatrico,
  psTrentoOrtopedico,
  psTrentoGinecologico,
  psTrentoOculistico,
  psNoData,
] as const;

export const codPSLoc = new Map<string, string>([
  ['005-PS-PS', 'Cles'],
  ['014-PS-PS', 'Cavalese'],
  ['004-PS-PS', 'Borgo Valsugana'],
  ['010-PS-PS', 'Arco'],
  ['007-PS-PS', 'Tione'],
  ['006-PS-PS', 'Rovereto'],
  ['001-PS-PS', 'Trento'],
  ['001-PS-PSP', 'Trento'],
  ['001-PS-PSO', 'Trento'],
  ['001-PS-PSG', 'Trento'],
  ['001-PS-PSC', 'Trento'],
]);

export function getPSLocalitaBycodPsOd(codPsOd: string): string {
  return codPSLoc.get(codPsOd) || 'Nessuna località disponibile';
}
