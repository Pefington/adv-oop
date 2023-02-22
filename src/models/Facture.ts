import { Facture, Lignes } from '../types/types.js';

export class FactureImplementation implements Facture {
  constructor(private readonly _lignes: Lignes) {}

  public imprimer(): void {
    let totalTaxes = 0;
    let totalCommande = 0;

    this._lignes.forEach((quantite, article) => {
      totalTaxes += article.montantTaxe * quantite;
      totalCommande += article.prixTTC * quantite;

      console.log(
        `* ${quantite} ${article.nom} à ${article.prixHT} € : ${article.prixTTC} € TTC`
      );
    });
    console.log('-------------------');
    console.log(`Montant des taxes : ${totalTaxes} €`);
    console.log(`Total : ${totalCommande} €`);
  }
}
