import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Product } from '../model/product.mode';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';
  products: any;

  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/product');
  }

  getProductById(productId: number) { //ดึงข้อมูลสินค้าตาม id ของสินค้า
    const product = this.products.find((p: { productId: number; }) => p.productId === productId); //ค้นหาสินค้าที่ตรงกับ id ที่ระบุ
    return of(product); //ส่งข้อมูลสินค้าที่พบในรูปแบบ Observable กลับไป
  }

}
