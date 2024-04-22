import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from '../model/product.model';
import { Users } from '../model/users.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.fetchProducts();
  }


  fetchProducts(): void {
    this.http.get<Product[]>(`${this.apiUrl}/product`)
      .pipe(
        tap(products => this.products = products),
        catchError(error => {
          console.error('Error fetching products:', error);
          return of([]); // Return an empty array in case of error
        })
      )
      .subscribe();
  }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/product');
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl + '/account');
  }

  getProductById(pid: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.pid === pid);
    return of(product);
  }

}
