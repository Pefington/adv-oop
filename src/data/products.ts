import { Product } from '../models/Product.js';
import { TAX_RATE } from './constants.js';

/*

Input 1

  2 livres à 12.49€
  1 CD musical à 14.99€
  3 barres de chocolat à 0.85€

Input 2

  2 boîtes de chocolats importées à 10€
  3 flacons de parfum importés à 47.50€

Input 3

  2 flacons de parfum importés à 27.99€
  1 flacon de parfum à 18.99€
  3 boîtes de pilules contre la migraine à 9.75€
  2 boîtes de chocolats importées à 11.25€

*/

export const livre1249 = new Product(
  'livre',
  'livres',
  1249,
  TAX_RATE.Book,
  false
);

export const cdMusical1499 = new Product(
  'CD musical',
  'CD musicaux',
  1499,
  TAX_RATE.General,
  false
);

export const barreChocolat85 = new Product(
  'barre de chocolat',
  'barres de chocolat',
  85,
  TAX_RATE.FoodOrMedication,
  false
);

export const boiteChocolatsImport1000 = new Product(
  'boîte de chocolats importée',
  'boîtes de chocolats importées',
  1000,
  TAX_RATE.FoodOrMedication,
  true
);

export const flaconParfumImport4750 = new Product(
  'flacon de parfum importé',
  'flacons de parfum importés',
  4750,
  TAX_RATE.General,
  true
);

export const flaconParfumImport2799 = new Product(
  'flacon de parfum importé',
  'flacons de parfum importés',
  2799,
  TAX_RATE.General,
  true
);

export const flaconParfum1899 = new Product(
  'flacon de parfum',
  'flacons de parfum',
  1899,
  TAX_RATE.General,
  false
);

export const boitePilulesMigraine975 = new Product(
  'boîte de pilules contre la migraine',
  'boîtes de pilules contre la migraine',
  975,
  TAX_RATE.FoodOrMedication,
  false
);

export const boiteChocolatsImport1125 = new Product(
  'boîte de chocolats importée',
  'boîtes de chocolats importées',
  1125,
  TAX_RATE.FoodOrMedication,
  true
);
