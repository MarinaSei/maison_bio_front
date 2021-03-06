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

  constructor(private produitService : ProduitService ) { }

  ngOnInit(): void {
    
  }

  ajouterProduit() {
    this.produits.push({...this.produit});
    // console.log(this.produit);
    this.produitService.addProduct(this.produit).subscribe(
      // () => { this.produits.push({...this.produit});
      //   console.log(this.produits)
      // },  
      // () => console.log("Erreur"),        
    );
    // J'ajoute le produit dans mon tableau produits avec la décomposition
    // Je vide les champs du formulaire
    this.produit = {};
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
