import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { FooterComponent } from './composants/footer/footer.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import { ProduitsComponent } from './composants/produits/produits.component';
import { AuthentificationComponent } from './composants/authentification/authentification.component';
import { FormsModule, FormBuilder } from '@angular/forms';
import { AdminComponent } from './composants/admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './composants/panier/panier.component';
import { ProduitComponent } from './composants/produit/produit.component';
import { ProduitPanierComponent } from './composants/produit-panier/produit-panier.component';
import { CommandeComponent } from './composants/commande/commande.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InscriptionComponent,
    ProduitsComponent,
    AuthentificationComponent,
    AdminComponent,
    PanierComponent,
    ProduitComponent,
    ProduitPanierComponent,
    CommandeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
