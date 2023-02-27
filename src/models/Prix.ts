import {
  ARRONDI_EN_CENTS,
  CategorieTaxe,
  TAUX_IMPORT,
} from '../data/Constantes.js';
import { PrixEnCents } from '../types/types.js';

export class Prix {
  constructor(
    private readonly _prixHT: PrixEnCents,
    private readonly _taux: CategorieTaxe,
    private readonly estImporte: boolean
  ) {}

  public get montantTaxe(): PrixEnCents {
    let taux = this._taux;
    if (this.estImporte) taux += TAUX_IMPORT;

    const montantInitial = (this._prixHT * taux) / 100;
    const montantArrondi =
      Math.ceil(montantInitial / ARRONDI_EN_CENTS) * ARRONDI_EN_CENTS;

    return montantArrondi;
  }

  public get ttc(): number {
    return this._prixHT + this.montantTaxe;
  }
}
