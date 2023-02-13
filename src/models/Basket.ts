import * as products from '../data/products.js';
import { PriceInCents, Quantity } from '../types/types.js';
import { Product } from './Product.js';


export type Invoice = string;
export type InvoiceItems = string;
export type InvoiceSummary = string;

export interface InvoiceLine {
  product: Product;
  quantity: Quantity;
}

export interface Basket {
  invoiceLines: InvoiceLine[];
  printInvoice: () => void;
}

export class Basket implements Basket {
  public printInvoice: () => void;

  #totalTax: PriceInCents;
  #totalPrice: PriceInCents;
  #invoice: Invoice;
  #items: InvoiceItems;
  #summary: InvoiceSummary;

  constructor(public invoiceLines: InvoiceLine[]) {
    this.printInvoice = this.#printInvoice;
    this.#totalTax = this.#computeBasketTax();
    this.#totalPrice = this.#computeBasketPrice();

    this.#invoice = this.generateInvoice();
    this.#items = this.#generateItemLines();
    this.#summary = this.#generateSummary();
  }

  #printInvoice(): void {
    console.log(this.#invoice);
    console.log('lol');
  }

  generateInvoice(): Invoice {
    return `\n\n${this.#items}\n${this.#summary}`;
  }

  #generateItemLines(): string {
    return this.invoiceLines
      .map((line) => `${this.#generateItemsLine(line)}`)
      .join('\n');
  }

  #generateItemsLine(line: InvoiceLine): string {
    const quantity = line.quantity;
    const price = this.#formatToFrench(line.product.preTaxPrice);
    const name =
      line.quantity === 1 ? line.product.nameSingular : line.product.namePlural;
    const total = this.#formatToFrench(this.#lineTotal(line));

    return `* ${quantity} ${name} à ${price} € : ${total} € TTC`;
  }

  #generateSummary(): InvoiceSummary {
    const taxes = this.#formatToFrench(this.#totalTax);
    const total = this.#formatToFrench(this.#totalPrice);
    return `\nMontant des taxes : ${taxes} €\nTotal : ${total} €`;
  }

  #lineTotal(invoiceLine: InvoiceLine): PriceInCents {
    return invoiceLine.product.afterTaxPrice * invoiceLine.quantity;
  }

  #formatToFrench(price: PriceInCents): string {
    return (price / 100).toFixed(2).replace('.', ',');
  }

  #computeBasketPrice(): PriceInCents {
    return this.invoiceLines.reduce(
      (total, line): PriceInCents =>
        total + line.product.afterTaxPrice * line.quantity,
      0
    );
  }

  #computeBasketTax(): PriceInCents {
    return this.invoiceLines.reduce(
      (total, line): PriceInCents =>
        total + line.product.totalTax * line.quantity,
      0
    );
  }
}

export const testBasket = new Basket([
  { product: products.livre1249, quantity: 2 },
  { product: products.cdMusical1499, quantity: 1 },
  { product: products.barreChocolat85, quantity: 3 },
]);

testBasket.generateInvoice();
