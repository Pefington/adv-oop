import { Produit } from '../models/Produit.js';

export type Entier = number;
export type LigneCommande = Map<Produit, Quantite>;
export type LigneFacture = Map<Produit, Quantite>;
export type Pourcentage = number;
export type PrixEnCents = number;
export type Quantite = Entier;
