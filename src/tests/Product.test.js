import { describe, expect,it } from 'vitest';

import {
  essential975,
  essentialImport1125,
  general1899,
  generalImport2799,
} from './testData';

describe('The Product class', () => {
  it('should have constructed a Product instance with the correct properties', () => {
    expect(generalImport2799).toEqual({
      nameSingular: 'flacon de parfum importé',
      namePlural: 'flacons de parfum importés',
      preTaxPrice: 2799,
      taxRate: 20,
      isImported: true,
    });
  });
});

describe("The Product's tax calculation", () => {
  it('should return the correct total tax for an imported product', () => {
    expect(generalImport2799.totalTax).toStrictEqual(700);
  });

  it('should return the correct total tax for a local product', () => {
    expect(general1899.totalTax).toStrictEqual(380);
  });

  it('should return the correct total tax for an essential product', () => {
    expect(essential975.totalTax).toStrictEqual(0);
  });

  it('should return the correct total tax of an essential imported product', () => {
    expect(essentialImport1125.totalTax).toStrictEqual(60);
  });
});

describe("The Product's after tax price calculation", () => {
  it('should return the correct after tax price of a local product', () => {
    expect(general1899.afterTaxPrice).toStrictEqual(2279);
  });

  it('should return the correct after tax price of an essential product', () => {
    expect(essential975.afterTaxPrice).toStrictEqual(975);
  });

  it('should return the correct after tax price of an imported product', () => {
    expect(generalImport2799.afterTaxPrice).toStrictEqual(3499);
  });

  it('should return the correct after tax price of an essential imported product', () => {
    expect(essentialImport1125.afterTaxPrice).toStrictEqual(1185);
  });
});
