import { Article } from '../main.js';

export type Entier = number;
export type Lignes = Map<Article, Quantite>;
export type Pourcentage = number;
export type PrixEnCents = number;
export type Origine = 'IMPORT' | 'LOCAL';
export type Quantite = Entier;

export interface ICommande {
  ajouterArticle: (article: Article, quantite: Quantite) => void;
  imprimerFacture: () => void;
}

export interface IFacture {
  imprimer: () => void;
}

export interface IPrix {
  prixTTC: () => PrixEnCents;
}
