import { Produit } from './produit';

export interface Panier {
    id?: number;
    totalTtc ?: number;
    tableauProduit ?: Array<Produit>;
}
