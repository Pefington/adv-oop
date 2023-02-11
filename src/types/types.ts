import { TAX_RATE } from '../data/constants.js';

export type PriceInCents = number;
export type Quantity = number;
export type DisplayName = string;
export type IBasket = BasketProduct[];

export interface IProduct {
  readonly nameSingular: DisplayName;
  readonly namePlural: DisplayName;
  readonly preTaxPrice: PriceInCents;
  readonly taxRate: TAX_RATE;
  readonly isImported: boolean;
  readonly totalTax: PriceInCents;
  readonly afterTaxPrice: PriceInCents;
}

export interface BasketProduct extends IProduct {
  quantity: Quantity;
}

export interface InvoiceLine {
  quantity: Quantity;
  name: DisplayName;
  price: PriceInCents;
  total: PriceInCents;
}

export interface Invoice {
  lines: InvoiceLine[];
  taxes: PriceInCents;
  total: PriceInCents;
}
