import { Pourcentage } from '../types/types.js';

export interface Taxe {
  tva: Pourcentage;
}

export class Taxe implements Taxe {
  constructor(public tva: Pourcentage) {}
}
