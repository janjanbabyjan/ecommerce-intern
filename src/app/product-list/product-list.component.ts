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
    // console.log(this.products)
  }
  
  navigateToProduct(pid: any) {
    this.router.navigate(['/product', pid]); // ไปหน้ารายละเอียดสินค้าโดยใช้ pid โดยเรียกใช้ router.navigate pid
  }

  showAllProducts() {
    this.productService.getProducts().subscribe((products: any[]) => {
      this.products = products;
    });
  }

  filterBy(category: string) {
    if (category === 'Dog' || category === 'Cat' || category === 'SmallPets') {
      this.productService.getProducts().subscribe((products: any[]) => {
        this.products = products.filter((p: { category: { cname: string }; }) => p.category.cname === category);
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
