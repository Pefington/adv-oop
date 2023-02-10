import { TAX_RATE, TAX_ROUNDING_STEP } from '../data/constants.js';
import { DisplayName, PriceInCents } from '../types/types.js';

export class Product {
  constructor(
    public readonly nameSingular: DisplayName,
    public readonly namePlural: DisplayName,
    public readonly taxRate: TAX_RATE,
    public readonly importStatus: 'isImported' | 'isNotImported',
    public readonly preTaxPrice: PriceInCents,
  ) {}

  public getAfterTaxPrice(): PriceInCents {
    return this.preTaxPrice + this.getTaxAmount();
  }

  public getTaxAmount(): PriceInCents {
    const roundedTax = this.applyRoundingStep(this.preTaxPrice);
    if (this.importStatus === 'isNotImported') return roundedTax;

    const importTax = (this.preTaxPrice * TAX_RATE.Import) / 100;
    const roundedImportTax = this.applyRoundingStep(importTax);
    return roundedTax + roundedImportTax;
  }

  private applyRoundingStep(tax: PriceInCents): PriceInCents {
    const taxInCents = Math.ceil(tax);
    const roundingRemainder = taxInCents % TAX_ROUNDING_STEP;
    if (roundingRemainder === 0) return taxInCents;

    const roundingCorrection = TAX_ROUNDING_STEP - roundingRemainder;
    return taxInCents + roundingCorrection;
  }
}

const testProduct = new Product(
  'singlename',
  'pluralname',
  TAX_RATE.Book,
  'isImported',
  100
);

console.log(testProduct, testProduct.getTaxAmount(), testProduct.getAfterTaxPrice());
