import { TAX_RATE, TAX_ROUNDING_STEP } from './data/constants.js';
import { DisplayName, PriceInCents } from './types/types.js';

export class Product {
  public nameSingular: DisplayName;
  public namePlural: DisplayName;
  public taxRate: TAX_RATE;
  public isImported: boolean;
  public priceInCents: PriceInCents;

  constructor(
    nameSingular: DisplayName,
    namePlural: DisplayName,
    taxRate: TAX_RATE,
    isImported: boolean,
    priceInCents: PriceInCents
  ) {
    this.nameSingular = nameSingular;
    this.namePlural = namePlural;
    this.taxRate = taxRate;
    this.isImported = isImported;
    this.priceInCents = priceInCents;
  }

  private calculateTax(): PriceInCents {
    const roundedTax = this.applyRoundingStep();
    if (!this.isImported) return roundedTax;

    const importTax = (this.priceInCents * TAX_RATE.Import) / 100;
    const roundedImportTax = this.applyRoundingStep();
    return roundedTax + roundedImportTax;
  }

  private calculatePrice(): PriceInCents {
    return this.priceInCents + this.calculateTax();
  }

  private applyRoundingStep(): PriceInCents {
    const taxInCents = Math.ceil(this.taxRate);
    const roundingRemainder = taxInCents % TAX_ROUNDING_STEP;
    if (roundingRemainder === 0) return taxInCents;

    const roundingCorrection = TAX_ROUNDING_STEP - roundingRemainder;
    return taxInCents + roundingCorrection;
  }
}
