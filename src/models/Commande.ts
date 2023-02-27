import { ArticleParQuantite, Quantite } from '../types/types.js';
import { Article } from './Article.js';
import { Facture } from './Facture.js';

export class Commande {
  private readonly _lignes: ArticleParQuantite = new Map();

  public ajouterArticle(article: Article, quantite: Quantite): void {
    this._lignes.set(article, quantite);
  }

  public imprimerFacture(): void {
    const facture = new Facture(this._lignes);
    facture.imprimer();
  }
}
