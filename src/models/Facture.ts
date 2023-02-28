import { ProduitParQuantite, PrixEnCents } from '../types/types.js';

export class Facture {
  constructor(private readonly _lignes: ProduitParQuantite) {}

  private _formatToFrench(price: PrixEnCents): string {
    return (price / 100).toFixed(2).replace('.', ',');
  }

  public imprimer(): void {
    let totalTaxes = 0;
    let totalCommande = 0;

    console.log('');

    this._lignes.forEach((quantite, produit) => {
      const prixHT = this._formatToFrench(produit.prixHT);
      const ligneTTC = this._formatToFrench(produit.prixTTC * quantite);

      totalTaxes += produit.montantTaxe * quantite;
      totalCommande += produit.prixTTC * quantite;

      console.log(
        `* ${quantite} ${produit.nom} à ${prixHT} € : ${ligneTTC} € TTC`
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
