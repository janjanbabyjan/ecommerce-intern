import { Component, Input, OnInit } from '@angular/core';
import { IndexPageComponent } from '../index-page/index-page.component';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: any;



  constructor(private productService: ProductService, private router: Router) {

  }
  ngOnInit(): void {
    console.log(this.products)
  }
  navigateToProduct(productId: number) {
    this.router.navigate(['/product', productId]); // ไปหน้ารายละเอียดสินค้าโดยใช้ productID โดยเรียกใช้ router.navigate productId
  }

  showAllProducts() {
    this.productService.getProducts().subscribe((products: any[]) => {
      this.products = products;
    });
  }

  filterBy(category: string) {
    if (category === 'dog' || category === 'cat' || category === 'smallpets') {
      this.productService.getProducts().subscribe((products: any[]) => {
        this.products = products.filter((p: { category: string; }) => p.category === category);
      });
    }
  }

  sortByPrice(order: string) {
    if (order === 'lowToHigh') {
      this.products.sort((a: { price: number }, b: { price: number }) => a.price - b.price);
    } else if (order === 'highToLow') {
      this.products.sort((a: { price: number }, b: { price: number }) => b.price - a.price);
    }
  }

}
