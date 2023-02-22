import { CategorieArticle } from './data/Constantes.js';
import { ArticleImplementation } from './models/Article.js';
import { CommandeImplementation } from './models/Commande.js';

/*
Input 1

  2 livres à 12.49€
  1 CD musical à 14.99€
  3 barres de chocolat à 0.85€
*/

export const livres1249 = new ArticleImplementation(
  'livres',
  1249,
  CategorieArticle.LIVRE
);

export const cdMusical1499 = new ArticleImplementation(
  'CD musical',
  1499,
  CategorieArticle.AUTRE
);

export const barresChocolat85 = new ArticleImplementation(
  'barres de chocolat',
  85,
  CategorieArticle.PREMIERE_NECESSITE
);

const commande1 = new CommandeImplementation();
commande1.ajouterArticle(livres1249, 2);
commande1.ajouterArticle(cdMusical1499, 1);
commande1.ajouterArticle(barresChocolat85, 3);
commande1.imprimerFacture();

/*
Input 2

  2 boîtes de chocolats importées à 10€
  3 flacons de parfum importés à 47.50€
*/

export const boitesChocolatsImport1000 = new ArticleImplementation(
  'boîtes de chocolats importées',
  1000,
  CategorieArticle.PREMIERE_NECESSITE
);

export const flaconsParfumImport4750 = new ArticleImplementation(
  'flacons de parfum importés',
  4750,
  CategorieArticle.AUTRE
);

const commande2 = new CommandeImplementation();
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

export const flaconsParfumImport2799 = new ArticleImplementation(
  'flacons de parfum importés',
  2799,
  CategorieArticle.AUTRE
);

export const flaconParfum1899 = new ArticleImplementation(
  'flacon de parfum',
  1899,
  CategorieArticle.AUTRE
);

export const boitesPilulesMigraine975 = new ArticleImplementation(
  'boîtes de pilules contre la migraine',
  975,
  CategorieArticle.PREMIERE_NECESSITE
);

export const boitesChocolatsImport1125 = new ArticleImplementation(
  'boîtes de chocolats importées',
  1125,
  CategorieArticle.PREMIERE_NECESSITE
);

const commande3 = new CommandeImplementation();
commande3.ajouterArticle(flaconsParfumImport2799, 2);
commande3.ajouterArticle(flaconParfum1899, 1);
commande3.ajouterArticle(boitesPilulesMigraine975, 3);
commande3.ajouterArticle(boitesChocolatsImport1125, 2);
commande3.imprimerFacture();
