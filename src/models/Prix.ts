import {
  ARRONDI_EN_CENTS,
  CategorieArticle,
  TAUX_IMPORT,
} from '../data/Constantes.js';
import { Origine, Prix, PrixEnCents } from '../types/types.js';

export class PrixImplementation implements Prix {
  private readonly _isImported: boolean;

  constructor(
    private readonly _prixHT: PrixEnCents,
    private readonly _taux: CategorieArticle,
    private readonly _origin?: Origine
  ) {
    this._isImported = this._origin === 'import';
  }

  public get montantTaxe(): PrixEnCents {
    let taux = this._taux;
    if (this._isImported) taux += TAUX_IMPORT;

    const montantInitial = (this._prixHT * taux) / 100;
    const montantArrondi =
      Math.ceil(montantInitial / ARRONDI_EN_CENTS) * ARRONDI_EN_CENTS;

    return montantArrondi;
  }

  public get ttc(): number {
    return this._prixHT + this.montantTaxe;
  }
}
