import type { LiturgyColor } from "./enums/liturgyColor.enum";

export type Liturgy = {
  "data": string;
  "liturgia": string;
  "cor": LiturgyColor;
  "oracoes": {
    "coleta": string;
    "oferendas": string;
    "comunhao": string;
    "extras": Extras[];
  },
  "leituras": {
    "primeiraLeitura": Leitura[];
    "salmo": [
      {
        "referencia": string;
        "refrao": string;
        "texto": string;
      },
    ],
    "segundaLeitura": Leitura[];
    "evangelho": Leitura[];
    "extras": Extras[]
  },
  "antifonas": {
    "entrada": string;
    "comunhao": string;
  }
}

type Extras = {
    "titulo": string;
    "texto": string;
}

type Leitura = {
    "referencia": string;
    "titulo": string;
    "texto": string;
}