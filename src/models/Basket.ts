import { PriceInCents, Quantity } from '../types/types.js';
import { Product } from './Product.js';

export interface InvoiceLine {
  product: Product;
  quantity: Quantity;
}

export interface Basket {
  invoiceLines: InvoiceLine[];
  printInvoice: () => void;
}

export class Basket implements Basket {
  constructor(public invoiceLines: InvoiceLine[]) {
    this.printInvoice = this.#logInvoice;
  }

  #logInvoice(): void {
    console.log(this.#formattedInvoice());
  }

  #formattedInvoice(): string {
    return `\n\n${this.#formattedLines()}\n${this.#formattedSummary()}`;
  }

  #formattedLines(): string {
    return this.invoiceLines.map((line) => `${this.#format(line)}`).join('\n');
  }

  #format(line: InvoiceLine): string {
    const price = this.#formatToFrench(line.product.preTaxPrice);
    const name =
      line.quantity === 1 ? line.product.nameSingular : line.product.namePlural;
    const total = this.#formatToFrench(this.#lineTotal(line));

    return `* ${line.quantity} ${name} à ${price} € : ${total} € TTC`;
  }

  #formattedSummary(): string {
    const taxes = this.#formatToFrench(this.#basketTax());
    const total = this.#formatToFrench(this.#basketTotal());

    return `\nMontant des taxes : ${taxes} €\nTotal : ${total} €`;
  }

  #basketTotal(): PriceInCents {
    return this.invoiceLines.reduce(
      (total, line): PriceInCents =>
        total + line.product.afterTaxPrice * line.quantity,
      0
    );
  }

  #lineTotal(line: InvoiceLine): PriceInCents {
    return line.product.afterTaxPrice * line.quantity;
  }

  #formatToFrench(price: PriceInCents): string {
    return (price / 100).toFixed(2).replace('.', ',');
  }

  #basketTax(): PriceInCents {
    return this.invoiceLines.reduce(
      (total, line): PriceInCents =>
        total + line.product.totalTax * line.quantity,
      0
    );
  }
}
