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
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/index');
  }


  getProductById(pid: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/product/${pid}`);
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl + '/account');
  }
}
