import { Quantite } from '../types/types.js';
import { Produit } from './Produit.js';

export interface IFacture {
  lignes: Array<Map<Produit, Quantite>>;
  imprimer: () => void;
}

export class Facture implements IFacture {
  constructor(public lignes: Array<Map<Produit, Quantite>>) {}

  imprimer(): void {}
}
