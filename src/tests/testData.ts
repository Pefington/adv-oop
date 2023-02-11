import { TAX_RATE } from '../data/constants.js';
import { Product } from '../models/Product.js';

export const generalImport2799 = new Product(
  'flacon de parfum importé',
  'flacons de parfum importés',
  2799,
  TAX_RATE.General,
  true
);

export const general1899 = new Product(
  'flacon de parfum',
  'flacons de parfum',
  1899,
  TAX_RATE.General,
  false
);

export const essential975 = new Product(
  'boîte de pilules contre la migraine',
  'boîtes de pilules contre la migraine',
  975,
  TAX_RATE.FoodOrMedication,
  false
);

export const essentialImport1125 = new Product(
  'boîte de chocolats importée',
  'boîtes de chocolats importées',
  1125,
  TAX_RATE.FoodOrMedication,
  true
);

// export const testBasket: IBasket = [
//   { ...generalImport2799, quantity: 1 },
//   { ...general1899, quantity: 1 },
//   { ...essential975, quantity: 1 },
//   { ...essentialImport1125, quantity: 1 },
// ];
