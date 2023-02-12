import {
  IBasket,
  BasketProduct,
  PriceInCents,
  Invoice,
  InvoiceLine,
  InvoiceLines,
  InvoiceSummary,
} from '../types/types.js';

export class Basket implements IBasket {
  private readonly basketTax: PriceInCents;
  private readonly basketPrice: PriceInCents;
  private readonly lines: String;
  private readonly summary: InvoiceSummary;
  private readonly invoice: Invoice;

  constructor(public products: BasketProduct[]) {
    this.basketTax = this.#basketTax();
    this.basketPrice = this.#basketPrice();
    this.summary = this.#summary();
    this.lines = this.#lines();
    this.invoice = this.#invoice();
  }

  public printInvoice(): void {
    console.log(this.invoice);
  }

  #invoice(): Invoice {
    return `\n\n${this.lines}\n${this.summary}`;
  }

  #basketPrice(): PriceInCents {
    return this.products.reduce(
      (total, product) => total + product.afterTaxPrice! * product.quantity,
      0
    );
  }

  #basketTax(): PriceInCents {
    return this.products.reduce(
      (total, product) => total + product.totalTax! * product.quantity,
      0
    );
  }

  #lines(): InvoiceLines {
    return this.products.map((product) => `${this.#line(product)}`).join('\n');
  }

  #line(product: BasketProduct): InvoiceLine {
    const quantity = product.quantity;
    const price = this.#formatToFrench(product.preTaxPrice);
    const name =
      product.quantity === 1 ? product.nameSingular : product.namePlural;
    const total = this.#formatToFrench(this.#productTotal(product));

    return `* ${quantity} ${name} à ${price} € : ${total} € TTC`;
  }

  #summary(): InvoiceSummary {
    const taxes = this.#formatToFrench(this.basketTax);
    const total = this.#formatToFrench(this.basketPrice);

    return `\nMontant des taxes : ${taxes} €\nTotal : ${total} €`;
  }

  #productTotal(product: BasketProduct): PriceInCents {
    return product.afterTaxPrice * product.quantity;
  }

  #formatToFrench(price: PriceInCents): string {
    return (price / 100).toFixed(2).replace('.', ',');
  }
}
