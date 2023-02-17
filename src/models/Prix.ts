import { Pourcentage, PrixEnCents } from '../types/types.js';

export interface IPrix {
  horsTaxe: PrixEnCents;
  arrondirTaxe: (prix: PrixEnCents) => PrixEnCents;
  montantTaxe: () => PrixEnCents;
  prixTotal: () => PrixEnCents;
}

export abstract class Prix implements IPrix {
  constructor(public horsTaxe: PrixEnCents) {}

  arrondirTaxe(prix: PrixEnCents): PrixEnCents {
    const arrondiEnCents = 5;
    const taxeEnCents = Math.ceil(tax);
    const roundingRemainder = taxInCents % TAX_ROUNDING_STEP;
    if (roundingRemainder === 0) return taxInCents;

    const roundingCorrection = TAX_ROUNDING_STEP - roundingRemainder;
    return taxInCents + roundingCorrection;
  }

  montantTaxe(): PrixEnCents {}

  prixTotal(): PrixEnCents {}
}
