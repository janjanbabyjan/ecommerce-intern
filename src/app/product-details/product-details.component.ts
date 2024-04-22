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

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const pid = +params['pid'];
      this.getProductDetails(pid);
    });
  }

  getProductDetails(pid: number): void {
    this.productService.getProductById(pid)
      .subscribe((product: any) => {
        this.product = product;
      });
  }
}