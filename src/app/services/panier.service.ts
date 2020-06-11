import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Panier } from '../interfaces/panier';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url = 'http://localhost:8000/api/panier';

  constructor(private http: HttpClient) { }

  addPanier(panier: Panier) {
    return this.http.post(this.url, panier);
  }
  getPanier(id: number) {
    return this.http.get<Panier>(this.url + '/' + id);
  }
  editPanier(panier: Panier) {
    return this.http.put(this.url + '/' + panier.id, panier);
  }
  deletePanier(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

}

