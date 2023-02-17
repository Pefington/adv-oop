export class Produit {
  constructor(
    private readonly nom: string,
    private readonly origine: "LOCAL" | "IMPORTE",
  ) {}
}
