import { Quantite, LigneCommande } from '../types/types.js';
import { Facture } from './Facture.js';
import { Produit } from './Produit.js';

export interface ICommande {
  ajouterProduit: (produit: Produit, quantite: Quantite) => void;
  imprimerFacture: () => void;
}

export class Commande implements ICommande {
  constructor() {
    this.ajouterProduit = this.ajouterProduit.bind(this);
  }

  public static ajouterProduit(produit: Produit, quantite: Quantite): void {}

  imprimerFacture(): void {}
}
