import { describe, it, expect } from 'vitest';
import { general1899, generalImport2799, essential975 } from './testData';

describe('Product', () => {
  it('should have constructed a product instance with the correct properties', () => {
    expect(generalImport2799).toEqual({
      nameSingular: 'flacon de parfum importé',
      namePlural: 'flacons de parfum importés',
      preTaxPrice: 2799,
      taxRate: 20,
      isImported: true,
    });
  });

  it('should calculate the after tax price of an essential product', () => {
    expect(essential975.afterTaxPrice).toStrictEqual(975);
  });

  it('should calculate the after tax price of an imported product', () => {
    expect(generalImport2799.afterTaxPrice).toStrictEqual(3499);
  });

  it('should calculate the total tax for a local product', () => {
    expect(general1899.totalTax).toStrictEqual(380);
  });

  it('should calculate the total tax for an imported product', () => {
    expect(generalImport2799.totalTax).toStrictEqual(700);
  });
});
