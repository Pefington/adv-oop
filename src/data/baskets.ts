import * as products from '../data/products.js';
import { Basket } from '../models/Basket.js';

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


export const basket1 = new Basket( [
  { product: products.livre1249, quantity: 2 },
  { product: products.cdMusical1499, quantity: 1 },
  { product: products.barreChocolat85, quantity: 3 },
] );

export const basket2 = new Basket( [
  { product: products.boiteChocolatsImport1000, quantity: 2 },
  { product: products.flaconParfumImport4750, quantity: 3 },
] );

export const basket3 = new Basket( [
  { product: products.flaconParfumImport2799, quantity: 2 },
  { product: products.flaconParfum1899, quantity: 1 },
  { product: products.boitePilulesMigraine975, quantity: 3 },
  { product: products.boiteChocolatsImport1125, quantity: 2 },
] );
