import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AccountComponent } from './account/account.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent,
    // children: []
  },
  {
    path: 'register',
    component: RegisterComponent,
    // children: []
  },
  {
    path: 'index',
    component: IndexPageComponent,
    children: []
  },
  {
    path: 'account',
    component: AccountComponent,
    // children: []
  },
  {
    path: 'cart',
    component: CartComponent,
    // children: []
  },

  {
    path: 'product/:pid',
    component: ProductDetailsComponent,
    // children: []
  },
  {
    path: '**', redirectTo: 'index', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
