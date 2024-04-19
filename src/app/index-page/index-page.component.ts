import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

  productList: any = []
  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.getProductList()
  }

  getProductList() {
    this.productService.getProducts() // เรียก getProductById จาก productService เพื่อดึงข้อมูลสินค้า
      .subscribe((product: any) => { // รับข้อมูลสินค้าที่ได้
        // this.product = product;
        this.productList = product
        // console.log(product)
      });
  }

}

