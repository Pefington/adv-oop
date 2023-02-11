import { Basket } from '../models/Basket.js';
import * as products from '../data/products.js';

export const basket1 = new Basket([
  { ...products.livre1249, quantity: 2 },
  { ...products.cdMusical1499, quantity: 1 },
  { ...products.barreChocolat85, quantity: 3 },
]);

export const basket2 = new Basket([
  { ...products.boiteChocolatsImport1000, quantity: 2 },
  { ...products.flaconParfumImport4750, quantity: 3 },
]);

export const basket3 = new Basket([
  { ...products.flaconParfumImport2799, quantity: 2 },
  { ...products.flaconParfum1899, quantity: 1 },
  { ...products.boitePilulesMigraine975, quantity: 3 },
  { ...products.boiteChocolatsImport1000, quantity: 2 },
]);
