import { TAX_RATE } from '../data/constants.js';

export type DisplayName = string;
export type PriceInCents = number;
export type Quantity = number;
export type Invoice = string;
export type InvoiceLine = string;
export type InvoiceLines = string;
export type InvoiceSummary = string;

export interface BasketProduct extends IProduct {
  quantity: Quantity;
}

export interface IBasket {
  products: BasketProduct[];
}

export interface IProduct {
  readonly nameSingular: DisplayName;
  readonly namePlural: DisplayName;
  readonly preTaxPrice: PriceInCents;
  readonly taxRate: TAX_RATE;
  readonly isImported: boolean;
  readonly totalTax: PriceInCents;
  readonly afterTaxPrice: PriceInCents;
}
