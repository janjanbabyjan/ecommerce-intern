import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  showEditProfile: boolean = false;

  toggleEditProfile() {
    this.showEditProfile = !this.showEditProfile;
  }
}
