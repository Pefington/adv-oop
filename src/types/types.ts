import { ArticleImplementation } from '../models/Article.js';

export type Entier = number;
export type Lignes = Map<ArticleImplementation, Quantite>;
export type Pourcentage = number;
export type PrixEnCents = number;
export type Quantite = Entier;

export interface Commande {
  ajouterArticle: (article: ArticleImplementation, quantite: Quantite) => void;
  imprimerFacture: () => void;
}

export interface Facture {
  imprimer: () => void;
}

export interface Article {
  get nom(): string;
  get prixHT(): PrixEnCents;
  get montantTaxe(): PrixEnCents;
  get prixTTC(): PrixEnCents;
}

export interface Prix {
  get montantTaxe(): PrixEnCents;
  get ttc(): PrixEnCents;
}
