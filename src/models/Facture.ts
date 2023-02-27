import { ArticleParQuantite, PrixEnCents } from '../types/types.js';

export class Facture {
  constructor(private readonly _lignes: ArticleParQuantite) {}

  private _formatToFrench(price: PrixEnCents): string {
    return (price / 100).toFixed(2).replace('.', ',');
  }

  public imprimer(): void {
    let totalTaxes = 0;
    let totalCommande = 0;

    console.log('');

    this._lignes.forEach((quantite, article) => {
      const prixHT = this._formatToFrench(article.prixHT);
      const ligneTTC = this._formatToFrench(article.prixTTC * quantite);

      totalTaxes += article.montantTaxe * quantite;
      totalCommande += article.prixTTC * quantite;

      console.log(
        `* ${quantite} ${article.nom} à ${prixHT} € : ${ligneTTC} € TTC`
      );
    });

    const totalTaxesFR = this._formatToFrench(totalTaxes);
    const totalCommandeFR = this._formatToFrench(totalCommande);

    console.log('');
    console.log(`  Montant des taxes : ${totalTaxesFR} €`);
    console.log(`  Total : ${totalCommandeFR} €`);
    console.log('');
    console.log('========================================');
  }
}
