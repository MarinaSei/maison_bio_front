import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';
import { element } from 'protractor';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  produits : Array<Produit> = [];
  produit : Produit = {};
  cachee = true;
  modify = true;

  constructor() { }

  ngOnInit(): void {
  }

  ajouterProduit() {
    // J'ajoute le produit dans mon tableau produits avec la décomposition
    this.produits.push({...this.produit});
    // Je vide les champs du formulaire
    this.produit = {};
    console.log(this.produits);
  }

  supprimerProduit(id: number) {
    //console.log(id);
    // Je supprime le produit avec l'id passé en paramètre & j'indique de supprimer qu'un seul article (2eme param)
    this.produits.splice(id, 1);
    console.log(this.produits);
  }

  modifierProduit(id: number) {
    // J'affiche les inputs pour la modification
    this.cachee = false;
    this.modify = false;
    
   // this.produitService.editProduct(this.produit.id)

  }
  

  

}
