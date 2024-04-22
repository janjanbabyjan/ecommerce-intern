import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  showEditProfile: boolean = false;
  users: any;

  toggleEditProfile() {
    this.showEditProfile = !this.showEditProfile;
  }
}
