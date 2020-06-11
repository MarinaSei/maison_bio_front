import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitService } from 'src/app/services/produit.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: Array<Produit> = [];
  //produit = {};
  
 
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    // Au chargement de la page, j'affiche les produits
    this.afficherProduits();
  }

  afficherProduits() {
    this.produitService.getAllProducts().subscribe(
      data => {
        console.log(this.produits);
        this.produits = data;
      }
    )
  }


  


  



}
