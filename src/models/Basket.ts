import { IBasket, BasketProduct, PriceInCents } from '../types/types.js';

export class Basket implements IBasket {
  public readonly afterTaxPrice: PriceInCents;
  public readonly totalTax: PriceInCents;

  constructor( public readonly products: BasketProduct[] ) {
    this.afterTaxPrice = this._afterTaxPrice();
    this.totalTax = this._totalTax();
  }

  private _afterTaxPrice(): PriceInCents {
    return this.products.reduce(
      (total, product) => total + product.afterTaxPrice! * product.quantity,
      0
    );
  }

  private _totalTax(): PriceInCents {
    return this.products.reduce(
      (total, product) => total + product.totalTax! * product.quantity,
      0
    );
  }
}
