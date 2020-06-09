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
  produits: Array<Produit> = [];
  // produit : Produit = {};
  id: number;
  
  @Input() produit : Produit;

  //subscription : Subscription;

  constructor(private route: ActivatedRoute, private produitService: ProduitService, private router : Router) { }

  ngOnInit(): void {
    // Au chargement de la page 
    // this.route.paramMap.subscribe(data => {
    //   // Je récupère l'id de mon url
    //   this.id = +data.get('id');
    //   // Je récupère mon produit grâce à l'id 
    //   this.produitService.getProduct(this.id).subscribe(
    //     res => {
    //       this.produit = res;
    //       //console.log(this.id);
    //       //console.log(res);
    //       //console.log(Object.values(res));
    //       console.log(this.produit.id);
    //     }
    //   )
    // });

    this.afficherProduit(this.produit.id);
    
  }

  afficherProduit(id: number) {
    this.produitService.getProduct(this.id).subscribe(
      data => {
        this.produit = data;
        console.log(this.produit);
      }
    )
  }

  // Pour l'ajout au panier, il faudra faire un observable qui passe l'information au panier
  ajouterPanier() {
    
  }


  verifierQuantite() {
    
  }

}
