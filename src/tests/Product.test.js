import { describe, it, expect } from 'vitest';
import { Product } from '../models/Product';

const essential975 = new Product(
  'single essential product',
  'several essential products',
  0,
  'isNotImported',
  975
);
const otherImport2799 = new Product(
  'singularname',
  'pluralname',
  25,
  'isImported',
  2799
);

describe('Product', () => {
  it('should return a product with the correct properties', () => {
    expect(essential975).toStrictEqual({
      nameSingular: 'single essential product',
      namePlural: 'several essential products',
      taxRate: 0,
      importStatus: 'isNotImported',
      preTaxPrice: 975,
    });
  });

  it('should return a product with the correct properties', () => {
    expect(otherImport2799).toStrictEqual({
      nameSingular: 'singularname',
      namePlural: 'pluralname',
      taxRate: 25,
      importStatus: 'isImported',
      preTaxPrice: 2799,
    });
  });

  it('should calculate the price of an essential product after taxes', () => {
    expect(essential975.getAfterTaxPrice()).toStrictEqual(975);
  });

  it('should calculate the price of an imported product after taxes', () => {
    expect(otherImport2799.getAfterTaxPrice()).toStrictEqual(3499);
  } );

  it('given a product, should calculate the tax to pay for a local product', () => {
    expect(calculateTax(other1899)).toStrictEqual(380);
  });

  it('should calculate the tax to pay for an imported product', () => {
    expect(calculateTax(otherImport2799)).toStrictEqual(700);
  } );
  
});
