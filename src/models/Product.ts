import { TAX_RATE, TAX_ROUNDING_STEP } from '../data/constants.js';
import { PriceInCents } from '../types/types.js';

export type DisplayName = string;

export interface Product {
  readonly nameSingular: DisplayName;
  readonly namePlural: DisplayName;
  readonly preTaxPrice: PriceInCents;
  readonly taxRate: TAX_RATE;
  readonly isImported: boolean;
}

export class Product implements Product {
  #totalTax: PriceInCents;
  #afterTaxPrice: PriceInCents;

  constructor(
    public readonly nameSingular: DisplayName,
    public readonly namePlural: DisplayName,
    public readonly preTaxPrice: PriceInCents,
    public readonly taxRate: TAX_RATE,
    public readonly isImported: boolean
  ) {
    this.#totalTax = this.#computeTotalTax();
    this.#afterTaxPrice = this.#computeAfterTaxPrice();
  }

  get totalTax(): PriceInCents {
    return this.#totalTax;
  }

  get afterTaxPrice(): PriceInCents {
    return this.#afterTaxPrice;
  }

  #computeAfterTaxPrice(): PriceInCents {
    return this.preTaxPrice + this.totalTax;
  }

  #computeTotalTax(): PriceInCents {
    const initialTax = (this.preTaxPrice * this.taxRate) / 100;
    const roundedTax = this.#applyRoundingStep(initialTax);
    if (!this.isImported) return roundedTax;

    const importTax = (this.preTaxPrice * TAX_RATE.Import) / 100;
    const roundedImportTax = this.#applyRoundingStep(importTax);
    return roundedTax + roundedImportTax;
  }

  #applyRoundingStep(tax: PriceInCents): PriceInCents {
    const taxInCents = Math.ceil(tax);
    const roundingRemainder = taxInCents % TAX_ROUNDING_STEP;
    if (roundingRemainder === 0) return taxInCents;

    const roundingCorrection = TAX_ROUNDING_STEP - roundingRemainder;
    return taxInCents + roundingCorrection;
  }
}

// const testProduct = new Product(
//   'livre',
//   'livres',
//   100,
//   TAX_RATE.General,
//   false
// );

// console.log(testProduct, testProduct.totalTax, testProduct.afterTaxPrice);
