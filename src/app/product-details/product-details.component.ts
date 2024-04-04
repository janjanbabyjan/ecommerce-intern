import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any; // Declare product variable

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService // Inject ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['productId'];
      this.getProductDetails(productId);
    });
  }

  getProductDetails(productId: number): void {
    this.productService.getProductById(productId)
      .subscribe(product => {
        this.product = product;
      });
  }
}