import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService  // รับข้อมูลมาเพื่อใช้ในคลาสนี้ (dependency injection)
  ) {
    this.route.params.subscribe(params => { //ตามการเปลี่ยนแปลงของ url
      const productId = +params['productId']; // ดึง productId จาก url
      this.getProductDetails(productId);   //เรียกใช้ productDetails จาก ProductID เพื่อดึงข้อมูลสินค้า
    });
  }

  ngOnInit(): void {
  }

  getProductDetails(productId: number): void {
    this.productService.getProductById(productId) // เรียก getProductById จาก productService เพื่อดึงข้อมูลสินค้า
      .subscribe((product: any) => { // รับข้อมูลสินค้าที่ได้
        this.product = product;
      });
  }
}