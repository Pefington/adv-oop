import { ProduitParQuantite, Quantite } from '../types/types.js';
import { Produit } from './Produit.js';
import { Facture } from './Facture.js';

export class Commande {
  private readonly _lignes: ProduitParQuantite = new Map();

  public ajouterProduit(produit: Produit, quantite: Quantite): void {
    this._lignes.set(produit, quantite);
  }

  public imprimerFacture(): void {
    const facture = new Facture(this._lignes);
    facture.imprimer();
  }
}
