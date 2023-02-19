/*

Le programme contient les types suivants :
  export type Entier = number;
  export type LigneCommande = Map<Article, Quantite>;
  export type Pourcentage = number;
  export type PrixEnCents = number;
  export type Quantite = Entier;

La classe Commande a :
  - une methode publique "ajouterArticle(article: Article, quantite: Quantite)" qui ajoute un article à la commande,
  - une methode publique "imprimerFacture()" qui imprime la facture de la commande.

La classe Article a :
  - une propriete privee "nom: string" qui contient le nom de l'article,
  - une propriete privee "importe: boolean" qui indique si l'article est importé ou non

La classe Facture a :
  - une methode publique "imprimer()" qui fait un console.log de la facture.

La classe Prix a :
  - une propriete privee "horsTaxe: PrixEnCents" qui contient le prix hors taxes en cents de l'article,
  - une methode privee "arrondirTaxe(taxe: PrixEnCents): PrixEnCents" qui arrondit le prix de la taxe aux 5 centimes supérieurs,
  - une methode publique "montantTaxe(taux: Pourcentage): PrixEnCents" qui calcule le prix de la taxe en cents,
  - une methode publique "ttc(): PrixEnCents" qui calcule le prix TTC en cents

La classe Taxe a :
  - une propriete privee "taux: Pourcentage" qui contient le taux de la taxe,

L'enumeration TypeArticle contient :
  - les valeurs "PREMIERE_NECESSITE", "LIVRE", "AUTRE"

*/

import { TypeArticle } from './data/TypeArticle.js';
import {
  ICommande,
  IFacture,
  IPrix,
  Lignes,
  Origine,
  Pourcentage,
  PrixEnCents,
  Quantite,
} from './types/types.js';

export class Commande implements ICommande {
  private readonly lignes: Lignes = new Map();

  public ajouterArticle(article: Article, quantite: Quantite): void {
    this.lignes.set(article, quantite);
  }

  public imprimerFacture(): void {
    const facture = new Facture(this.lignes);
    facture.imprimer();
  }
}

export class Facture implements IFacture {
  constructor(private readonly lignes: Lignes) {}
  public imprimer(): void {
    this.lignes.forEach( ( quantite, article ) => {
      const nom = article.nom;
      const prixHT = article.prixHT
      console.log(`* ${quantite} x ${nom} à ${price} € : ${total} € TTC`);
      console.log(`Article: ${article.nom} - Quantité: ${quantite}`);
    });
  }
}

export class Article {
  #nom: string;
  #origine: Origine;
  #categorie: TypeArticle;
  #prix: Prix;

  constructor(nom: string, prixHT: PrixEnCents, categorie: TypeArticle , origine: Origine) {
    this.#nom = nom;
    this.#prix = new Prix( prixHT: PrixEnCents, categorie: TypeArticle );
    this.#categorie = categorie;
    this.#origine = origine;
  }

  public get nom(): string {
    return this.#nom;
  }

  public get estImporte(): boolean {
    return this.#origine === 'IMPORT';
  }

  public get prixHT(): PrixEnCents {
    return this.#prix.horsTaxe;
  }
}

export class Prix implements IPrix {
  #horsTaxe: PrixEnCents;

  constructor(horsTaxe: PrixEnCents, categorie: TypeArticle) {
    this.#horsTaxe = horsTaxe;
  }

  public get horsTaxe(): PrixEnCents {
    return this.#horsTaxe;
  }

  #arrondirTaxe(taxe: PrixEnCents): PrixEnCents {
    return Math.ceil(taxe / 5) * 5;
  }

  #montantTaxe(taux: Pourcentage): PrixEnCents {
    return this.#arrondirTaxe(this.horsTaxe * taux);
  }

  public prixTTC(): PrixEnCents {
    return this.horsTaxe + this.#montantTaxe();
  }
}
