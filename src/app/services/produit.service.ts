import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../interfaces/produit';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private url = 'http://localhost:8000/api/produits';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Array<Produit>>(this.url).pipe(map(elt => elt['hydra:member']));
  }
  addProduct(product: Produit) {
    return this.http.post(this.url, product);
  }
  getProduct(id: number) {
    return this.http.get<Produit>(this.url + '/' + id);
  }
  editProduct(product: Produit) {
    return this.http.put(this.url + '/' + product.id, product);
  }
  deleteProduct(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

}

