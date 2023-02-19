import { TypeArticle } from './TypeArticle.js';

/*
Input 1

  2 livres à 12.49€
  1 CD musical à 14.99€
  3 barres de chocolat à 0.85€
*/

export const livre1249 = new Article(
  'livre',
  'livres',
  1249,
  TypeArticle.LIVRE,
  false
);

export const cdMusical1499 = new Article(
  'CD musical',
  'CD musicaux',
  1499,
  TypeArticle.AUTRE,
  false
);

export const barreChocolat85 = new Article(
  'barre de chocolat',
  'barres de chocolat',
  85,
  TypeArticle.PREMIERE_NECESSITE,
  false
);

/*
Input 2

  2 boîtes de chocolats importées à 10€
  3 flacons de parfum importés à 47.50€
*/

export const boiteChocolatsImport1000 = new Article(
  'boîte de chocolats importée',
  'boîtes de chocolats importées',
  1000,
  TypeArticle.PREMIERE_NECESSITE,
  true
);

export const flaconParfumImport4750 = new Article(
  'flacon de parfum importé',
  'flacons de parfum importés',
  4750,
  TypeArticle.AUTRE,
  true
);

/*
Input 3

  2 flacons de parfum importés à 27.99€
  1 flacon de parfum à 18.99€
  3 boîtes de pilules contre la migraine à 9.75€
  2 boîtes de chocolats importées à 11.25€
*/

export const flaconParfumImport2799 = new Article(
  'flacon de parfum importé',
  'flacons de parfum importés',
  2799,
  TypeArticle.AUTRE,
  true
);

export const flaconParfum1899 = new Article(
  'flacon de parfum',
  'flacons de parfum',
  1899,
  TypeArticle.AUTRE,
  false
);

export const boitePilulesMigraine975 = new Article(
  'boîte de pilules contre la migraine',
  'boîtes de pilules contre la migraine',
  975,
  TypeArticle.PREMIERE_NECESSITE,
  false
);

export const boiteChocolatsImport1125 = new Article(
  'boîte de chocolats importée',
  'boîtes de chocolats importées',
  1125,
  TypeArticle.PREMIERE_NECESSITE,
  true
);
