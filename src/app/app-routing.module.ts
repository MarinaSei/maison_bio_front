import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import { ProduitsComponent } from './composants/produits/produits.component';
import { AuthentificationComponent } from './composants/authentification/authentification.component';
import { AdminComponent } from './composants/admin/admin.component';
import { PanierComponent } from './composants/panier/panier.component';


const routes: Routes = [
  { path: 'inscription', component: InscriptionComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'panier', component: PanierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
