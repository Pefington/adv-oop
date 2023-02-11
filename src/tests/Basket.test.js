import { describe, it, expect } from 'vitest';
import { testBasket } from './testData';

describe('The Basket class', () => {
  it('should construct a Basket instance with the correct properties', () => {
    expect(testBasket).toEqual({
      products: [
        {
          nameSingular: 'flacon de parfum importé',
          namePlural: 'flacons de parfum importés',
          preTaxPrice: 2799,
          taxRate: 20,
          isImported: true,
          quantity: 2,
          totalTax: 700,
          afterTaxPrice: 3499,
        },
        {
          nameSingular: 'flacon de parfum',
          namePlural: 'flacons de parfum',
          preTaxPrice: 1899,
          taxRate: 20,
          isImported: false,
          quantity: 1,
          totalTax: 380,
          afterTaxPrice: 2279,
        },
        {
          nameSingular: 'boîte de pilules contre la migraine',
          namePlural: 'boîtes de pilules contre la migraine',
          preTaxPrice: 975,
          taxRate: 0,
          isImported: false,
          quantity: 3,
          totalTax: 0,
          afterTaxPrice: 975,
        },
        {
          nameSingular: 'boîte de chocolats importée',
          namePlural: 'boîtes de chocolats importées',
          preTaxPrice: 1125,
          taxRate: 0,
          isImported: true,
          quantity: 2,
          totalTax: 60,
          afterTaxPrice: 1185,
        },
      ],
      totalTax: 1900,
      afterTaxPrice: 14572,
    });
  });
});

describe("The Basket's tax calculation", () => {
  it('should return the correct total tax for the basket', () => {
    expect(testBasket.totalTax).toStrictEqual(1900);
  });
});

describe("The Basket's after tax price calculation", () => {
  it('should return the correct after tax price of the basket', () => {
    expect(testBasket.afterTaxPrice).toStrictEqual(14572);
  });
});
