import { Component, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';
import { Panier } from 'src/app/interfaces/panier';
// import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  produits : Array<Produit> = [];
  produit : Produit = {};
  // nombre = 0;
  // total = 0;

  constructor( ) { }

  ngOnInit(): void {
    //this.afficherTotal(this.produit);
  }

  ajouterLigne() {
    // this.produits.push({...this.produit});
    // this.panierService.addPanier(this.produit).subscribe();
  }

  afficherTotal(objet) {
    // console.log(objet);
    // this.nombre += objet.quantite;
    // this.total += objet.produit.prixTTCunit * objet.quantite;
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
