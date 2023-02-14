import { describe, expect, it, vitest } from 'vitest';

import { testBasket } from './testData';

console.log(testBasket.invoiceLines);

describe('The Basket class', () => {
  it('should construct a Basket instance with the correct properties', () => {
    expect(testBasket.invoiceLines).toEqual([
      {
        product: {
          nameSingular: 'flacon de parfum importé',
          namePlural: 'flacons de parfum importés',
          preTaxPrice: 2799,
          taxRate: 20,
          isImported: true,
        },
        quantity: 2,
      },
      {
        product: {
          nameSingular: 'flacon de parfum',
          namePlural: 'flacons de parfum',
          preTaxPrice: 1899,
          taxRate: 20,
          isImported: false,
        },
        quantity: 1,
      },
      {
        product: {
          nameSingular: 'boîte de pilules contre la migraine',
          namePlural: 'boîtes de pilules contre la migraine',
          preTaxPrice: 975,
          taxRate: 0,
          isImported: false,
        },
        quantity: 3,
      },
      {
        product: {
          nameSingular: 'boîte de chocolats importée',
          namePlural: 'boîtes de chocolats importées',
          preTaxPrice: 1125,
          taxRate: 0,
          isImported: true,
        },
        quantity: 2,
      },
    ]);
  });
});

describe("The Basket's printInvoice function", () => {
  it('should console.log a formatted invoice', () => {
    const logSpy = vitest.spyOn(global.console, 'log');
    testBasket.printInvoice();

    expect(logSpy).toHaveBeenLastCalledWith(
      `

* 2 flacons de parfum importés à 27,99 € : 69,98 € TTC
* 1 flacon de parfum à 18,99 € : 22,79 € TTC
* 3 boîtes de pilules contre la migraine à 9,75 € : 29,25 € TTC
* 2 boîtes de chocolats importées à 11,25 € : 23,70 € TTC

Montant des taxes : 19,00 €
Total : 145,72 €`
    );
    logSpy.mockClear();
  });
});
