import { Component, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  produits : Array<Produit> = [];
  produit : Produit = {};
  nombre = 0;
  total = 0;

  constructor() { }

  ngOnInit(): void {
    this.afficherTotal(this.produit);
  }

  afficherTotal(objet) {
    console.log(objet);
    this.nombre += objet.quantite;
    this.total += objet.produit.prixTTCunit * objet.quantite;
  }
  afficherQuantiteProduit() {
    
  }
  afficherTotalLigne() {
    // Quantité d'un produit * prix du produit = totalLigne
    
  }

  supprimerLigne() {
    // Supprimer ligne 
  }

  validerLigne() {
    // valide la quantité d'une ligne & la met à jour
    // Utiliser observables pour actualiser automatiquement le changement
  }



}
