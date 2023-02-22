import { CategorieArticle } from '../data/Constantes.js';
import { Article, Prix, PrixEnCents } from '../types/types.js';
import { PrixImplementation } from './Prix.js';

export class ArticleImplementation implements Article {
  private readonly _estImporte: boolean;
  private readonly _prix: Prix;

  constructor(
    private readonly _nom: string,
    private readonly _prixHT: PrixEnCents,
    private readonly _categorie: CategorieArticle
  ) {
    this._estImporte = this._nom.includes('import');
    this._prix = new PrixImplementation(
      this._prixHT,
      this._categorie,
      this._estImporte
    );
  }

  public get nom(): string {
    return this._nom;
  }

  public get prixHT(): PrixEnCents {
    return this._prixHT;
  }

  public get montantTaxe(): PrixEnCents {
    return this._prix.montantTaxe;
  }

  public get prixTTC(): PrixEnCents {
    return this._prix.ttc;
  }
}
