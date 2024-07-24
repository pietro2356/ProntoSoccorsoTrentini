export type Colors = 'bianco' | 'verde' | 'giallo' | 'arancio' | 'azzurro' | 'rosso';

interface Color {
  name: Colors; // Nome del colore
  hex: string; // Codice esadecimale del colore
}

export const colorCode: Color[] = [
  { name: 'bianco', hex: '#DCDFE4' },
  { name: 'verde', hex: '#A5ED72' },
  { name: 'giallo', hex: '#F8F85F' },
  { name: 'arancio', hex: '#FFB053' },
  { name: 'azzurro', hex: '#61AFEF' },
  { name: 'rosso', hex: '#FF4E4A' },
];

export function getHexColor(colorName: Colors): string {
  const color = colorCode.find(c => c.name.toLowerCase() === colorName.toLowerCase());
  return color ? color.hex : '#DCDFE4';
}
