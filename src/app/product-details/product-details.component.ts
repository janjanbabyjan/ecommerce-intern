import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';


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

getProductDetails(pid: number) {
  this.productService.getProductById(pid)
    .subscribe((product: Product) => {
      this.product = product;
    });
}
}   