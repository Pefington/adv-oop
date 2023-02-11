import { TAX_RATE } from './constants.js';
import { IBasket } from '../types/types.js';

export const basket1: IBasket = [
  {
    nameSingular: 'livre',
    namePlural: 'livres',
    taxRate: TAX_RATE.Book,
    isImported: false,
    preTaxPrice: 1249,
    quantity: 2,
  },
  {
    nameSingular: 'CD musical',
    namePlural: 'CD musicaux',
    taxRate: TAX_RATE.General,
    isImported: false,
    preTaxPrice: 1499,
    quantity: 1,
  },
  {
    nameSingular: 'barre de chocolat',
    namePlural: 'barres de chocolat',
    taxRate: TAX_RATE.FoodOrMedication,
    isImported: false,
    preTaxPrice: 85,
    quantity: 3,
  },
];

export const basket2: IBasket = [
  {
    nameSingular: 'boîte de chocolats importée',
    namePlural: 'boîtes de chocolats importées',
    taxRate: TAX_RATE.FoodOrMedication,
    isImported: true,
    preTaxPrice: 1000,
    quantity: 2,
  },
  {
    nameSingular: 'flacon de parfum importé',
    namePlural: 'flacons de parfum importés',
    taxRate: TAX_RATE.General,
    isImported: true,
    preTaxPrice: 4750,
    quantity: 3,
  },
];

export const basket3: IBasket = [
  {
    nameSingular: 'flacon de parfum importé',
    namePlural: 'flacons de parfum importés',
    taxRate: TAX_RATE.General,
    isImported: true,
    preTaxPrice: 2799,
    quantity: 2,
  },
  {
    nameSingular: 'flacon de parfum',
    namePlural: 'flacons de parfum',
    taxRate: TAX_RATE.General,
    isImported: false,
    preTaxPrice: 1899,
    quantity: 1,
  },
  {
    nameSingular: 'boîte de pilules contre la migraine',
    namePlural: 'boîtes de pilules contre la migraine',
    taxRate: TAX_RATE.FoodOrMedication,
    isImported: false,
    preTaxPrice: 975,
    quantity: 3,
  },
  {
    nameSingular: 'boîte de chocolats importée',
    namePlural: 'boîtes de chocolats importées',
    taxRate: TAX_RATE.FoodOrMedication,
    isImported: true,
    preTaxPrice: 1125,
    quantity: 2,
  },
];
