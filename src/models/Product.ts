import { TAX_RATE, TAX_ROUNDING_STEP } from '../data/constants.js';
import { DisplayName, IProduct, PriceInCents } from '../types/types.js';

export class Product implements IProduct {
  public readonly totalTax: PriceInCents;
  public readonly afterTaxPrice: PriceInCents;
  constructor(
    public readonly nameSingular: DisplayName,
    public readonly namePlural: DisplayName,
    public readonly preTaxPrice: PriceInCents,
    public readonly taxRate: TAX_RATE,
    public readonly isImported: boolean,
  ) {
    this.totalTax = this._totalTax();
    this.afterTaxPrice = this._afterTaxPrice();
  }

  private _afterTaxPrice(): PriceInCents {
    return this.preTaxPrice + this.totalTax;
  }

  private _totalTax(): PriceInCents {
    const initialTax = (this.preTaxPrice * this.taxRate) / 100;
    const roundedTax = this.applyRoundingStep(initialTax);
    if (!this.isImported) return roundedTax;

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
