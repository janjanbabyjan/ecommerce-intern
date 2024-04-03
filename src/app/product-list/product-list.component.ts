import { Component, OnInit } from '@angular/core';
import { IndexPageComponent } from '../index-page/index-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(private indexPageComponent: IndexPageComponent) {

  }

  ngOnInit(): void {
    this.products = this.indexPageComponent.getProducts();
  }
}
