import { CategorieTaxe } from './data/Constantes.js';
import { Article } from './models/Article.js';
import { Commande } from './models/Commande.js';

/*
Input 1

  2 livres à 12.49€
  1 CD musical à 14.99€
  3 barres de chocolat à 0.85€
*/

export const livres1249 = new Article('livres', 1249, CategorieTaxe.LIVRE);

export const cdMusical1499 = new Article(
  'CD musical',
  1499,
  CategorieTaxe.AUTRE
);

export const barresChocolat85 = new Article(
  'barres de chocolat',
  85,
  CategorieTaxe.PREMIERE_NECESSITE
);

const commande1 = new Commande();
commande1.ajouterArticle(livres1249, 2);
commande1.ajouterArticle(cdMusical1499, 1);
commande1.ajouterArticle(barresChocolat85, 3);
commande1.imprimerFacture();

/*
Input 2

  2 boîtes de chocolats importées à 10€
  3 flacons de parfum importés à 47.50€
*/

export const boitesChocolatsImport1000 = new Article(
  'boîtes de chocolats importées',
  1000,
  CategorieTaxe.PREMIERE_NECESSITE
);

export const flaconsParfumImport4750 = new Article(
  'flacons de parfum importés',
  4750,
  CategorieTaxe.AUTRE
);

const commande2 = new Commande();
commande2.ajouterArticle(boitesChocolatsImport1000, 2);
commande2.ajouterArticle(flaconsParfumImport4750, 3);
commande2.imprimerFacture();

/*
Input 3

  2 flacons de parfum importés à 27.99€
  1 flacon de parfum à 18.99€
  3 boîtes de pilules contre la migraine à 9.75€
  2 boîtes de chocolats importées à 11.25€
*/

export const flaconsParfumImport2799 = new Article(
  'flacons de parfum importés',
  2799,
  CategorieTaxe.AUTRE
);

export const flaconParfum1899 = new Article(
  'flacon de parfum',
  1899,
  CategorieTaxe.AUTRE
);

export const boitesPilulesMigraine975 = new Article(
  'boîtes de pilules contre la migraine',
  975,
  CategorieTaxe.PREMIERE_NECESSITE
);

export const boitesChocolatsImport1125 = new Article(
  'boîtes de chocolats importées',
  1125,
  CategorieTaxe.PREMIERE_NECESSITE
);

const commande3 = new Commande();
commande3.ajouterArticle(flaconsParfumImport2799, 2);
commande3.ajouterArticle(flaconParfum1899, 1);
commande3.ajouterArticle(boitesPilulesMigraine975, 3);
commande3.ajouterArticle(boitesChocolatsImport1125, 2);
commande3.imprimerFacture();
