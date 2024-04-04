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

  constructor(private indexPageComponent: IndexPageComponent) {

  }
  ngOnInit(): void {
    this.products = this.indexPageComponent.getProducts();
  }
  //   public showDogCategory(): void {
  //   this.products = this.indexPageComponent.getProducts('dog');
  // }

  // public sortProductsDesc(): void {
  //   this.products = this.products.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
  // }

  // public sortProductsAsc() {
  //   this.products = this.products.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
  // }
}
