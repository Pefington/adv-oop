import { Commande, Lignes, Quantite } from '../types/types.js';
import { ArticleImplementation } from './Article.js';
import { FactureImplementation } from './Facture.js';

export class CommandeImplementation implements Commande {
  private readonly _lignes: Lignes = new Map();

  public ajouterArticle(
    article: ArticleImplementation,
    quantite: Quantite
  ): void {
    this._lignes.set(article, quantite);
  }

  public imprimerFacture(): void {
    const facture = new FactureImplementation(this._lignes);
    facture.imprimer();
  }
}
