import { Product } from '../models/Product.js';

export type PriceInCents = number;
export type Quantity = number;
export type DisplayName = string;

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
