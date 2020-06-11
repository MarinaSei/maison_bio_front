import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/interfaces/produit';
import { ProduitService } from 'src/app/services/produit.service';
// import { Subscription, Observable } from 'rxjs';
// import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  // produit : Produit = {};
  //id: number;
  quantite = 1;

  @Input() produit : Produit;

  @Output() message = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.produit);
  }

  // Exemple du cours
  ajouterPanier() {
    // J'émet un message à mon composant pour transmettre le produit sélectionné & la quantité
    this.message.emit({ produit: this.produit, quantite: this.quantite })
    // Console log qui marchent
    console.log(this.produit);
    console.log(this.quantite);
  }

  verifierQuantite() {
    
  }

}

  // afficherProduit(id: number) {
  //   this.produitService.getProduct(this.id).subscribe(
  //     data => {
  //       this.produit= data;
  //       console.log(this.produit);
  //     }
  //   )
  // }