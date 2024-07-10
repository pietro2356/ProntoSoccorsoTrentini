// TODO: controllare perché la regola eslint no-unused-vars viene attivata per l'enum ColorName
export enum ColorName {
  // eslint-disable-next-line no-unused-vars
  bianco = 'bianco',
  // eslint-disable-next-line no-unused-vars
  verde = 'verde',
  // eslint-disable-next-line no-unused-vars
  giallo = 'giallo',
  // eslint-disable-next-line no-unused-vars
  arancio = 'arancio',
  // eslint-disable-next-line no-unused-vars
  azzurro = 'azzurro',
  // eslint-disable-next-line no-unused-vars
  rosso = 'rosso',
  // eslint-disable-next-line no-unused-vars
}

interface Color {
  name: ColorName; // Nome del colore (utilizzando il tipo enum)
  hex: string; // Codice esadecimale del colore
}

export const colorCode: Color[] = [
  { name: ColorName.bianco, hex: '#DCDFE4' },
  { name: ColorName.verde, hex: '#A5ED72' },
  { name: ColorName.giallo, hex: '#F8F85F' },
  { name: ColorName.arancio, hex: '#FFB053' },
  { name: ColorName.azzurro, hex: '#61AFEF' },
  { name: ColorName.rosso, hex: '#FF4E4A' },
];

// TODO: Implementare la funzione getHexColor che restituisce il codice esadecimale del colore
export function getHexColor(colorName: string): string | undefined {
  const color = colorCode.find(c => c.name.toLowerCase() === colorName.toLowerCase());
  return color ? color.hex : undefined;
}
