import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  users: any = [];

  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.productService.getUsers()
      .subscribe((users: any) => {
        this.getUsers = users
      });
  }

  showEditProfile: boolean = false;

  toggleEditProfile() {
    this.showEditProfile = !this.showEditProfile;
  }
}
