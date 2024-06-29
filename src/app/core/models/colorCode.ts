export enum ColorName {
  bianco = "bianco",
  verde = "verde",
  giallo = "giallo",
  arancio = "arancio",
  azzurro = "azzurro",
  rosso = "rosso"
}

interface Color {
  name: ColorName; // Nome del colore (utilizzando il tipo enum)
  hex: string; // Codice esadecimale del colore
}

export const colorCode: Color[] = [
  { name: ColorName.bianco, hex: "#DCDFE4" },
  { name: ColorName.verde, hex: "#A5ED72" },
  { name: ColorName.giallo, hex: "#F8F85F" },
  { name: ColorName.arancio, hex: "#FFB053" },
  { name: ColorName.azzurro, hex: "#61AFEF" },
  { name: ColorName.rosso, hex: "#FF4E4A" },
];

export function getHexColor(colorName: string): string | undefined {
  const color = colorCode.find(c => c.name.toLowerCase() === colorName.toLowerCase());
  return color ? color.hex : undefined;
}
