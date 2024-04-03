import { Component } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent {

  getProducts() {
    return [
      {
        productId: 1,
        imgSrc: './assets/kaniva1.jpg',
        name: 'Kaniva : สูตรเนื้อไก่ 1.5kg',
        price: 235
      },
      {
        productId: 2,
        imgSrc: './assets/kaniva2.jpg',
        name: 'Kaniva : สูตรแซลมอน 11kg',
        price: 1390
      },
      {
        productId: 3,
        imgSrc: './assets/kaniva3.jpg',
        name: 'Kaniva : สูตรเนื้อแกะ 12kg',
        price: 1490
      }
    ];
  }

}
