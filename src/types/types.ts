import { TAX_RATE } from '../data/constants.js';

export type PriceInCents = number;
export type Quantity = number;
export type DisplayName = string;

export interface Product {
  nameSingular: DisplayName;
  namePlural: DisplayName;
  taxRate: TAX_RATE;
  isImported: boolean;
  priceInCents: PriceInCents;
}

export type Basket = Array<Product & { quantity: Quantity }>;

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
