export const LiturgyColor = {
    Verde: "Verde",
    Vermelho: "Vermelho",
    Roxo: "Roxo",
    Rosa: "Rosa",
    Branco: "Branco",
} as const;

export type LiturgyColor = typeof LiturgyColor[keyof typeof LiturgyColor];