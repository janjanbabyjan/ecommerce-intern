import { Component, Input, OnInit } from '@angular/core';
import { IndexPageComponent } from '../index-page/index-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: any;
  


  // products: any;

  constructor(private indexPageComponent: IndexPageComponent, private router: Router) {

  }
  ngOnInit(): void {
    // this.products = this.indexPageComponent.getProducts(); //เรียก getProducts จาก indexPageComponent เพื่อรับข้อมูลสินค้า
    console.log(this.products)
  }
  navigateToProduct(productId: number) { 
    this.router.navigate(['/product', productId]); // ไปหน้ารายละเอียดสินค้าโดยใช้ productID โดยเรียกใช้ router.navigate productId
  }

  showAllProducts() {
    this.products = this.indexPageComponent.getProducts(); // แสดงสินค้าทั้งหมด
  }

  filterBy(category: string) {
    if (category === 'dog' || category === 'cat' || category === 'smallpets') {
      this.products = this.indexPageComponent.getProducts().filter((p: { category: string; }) => p.category === category);
    }
  }
}
