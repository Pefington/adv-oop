import { CategorieArticle } from '../data/Constantes.js';
import { ArticleImplementation } from '../models/Article.js';

export type Entier = number;
export type Lignes = Map<ArticleImplementation, Quantite>;
export type Pourcentage = number;
export type PrixEnCents = number;
export type Origine = 'import' | undefined;
export type Quantite = Entier;

export interface Commande {
  ajouterArticle: (article: ArticleImplementation, quantite: Quantite) => void;
  imprimerFacture: () => void;
}

export interface Facture {
  imprimer: () => void;
}

export interface Article {
  get prixHT(): PrixEnCents;
  get categorie(): CategorieArticle;
  get origine(): Origine;
}

export interface Prix {
  get montantTaxe(): PrixEnCents;
  get ttc(): PrixEnCents;
}
