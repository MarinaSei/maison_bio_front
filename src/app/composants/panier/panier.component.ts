import { Component, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';
import { Panier } from 'src/app/interfaces/panier';
import { ProduitService } from 'src/app/services/produit.service';
// import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  // J'initialise mon tableau de produits
  produits : Array<Produit> = [
    // { id: 1, nom: 'Dentifrice', description: 'ajout1', prixTTCunit: "8", quantiteEnStock: 20, image: 'dentifrice-1.jpeg' },
    // { id: 2, nom: 'Shampoing solide', description: 'ajout2', prixTTCunit: "10", quantiteEnStock: 20, image: 'shampoing-1.jpeg' },
  ];
  produit : Produit = {};
  nombre : number = 0;
  total = 0;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.afficherProduits();
    this.afficherTotal(this.produit);
    console.log(this.produit);
  }

  afficherProduits() {
    this.produitService.getAllProducts().subscribe(
      data => {
        console.log(this.produits);
        this.produits = data;
      }
    )
  }

  ajouterLigne() {
    // this.produits.push({...this.produit});
    // this.panierService.addPanier(this.produit).subscribe();
  }

  afficherTotal(objet) {
    this.nombre += objet.quantite;
    this.total += objet.produit.prixTTCunit * objet.quantite;
    console.log(this.nombre);
    console.log(this.total);
    console.log(objet);
    console.log(objet.quantite);
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
