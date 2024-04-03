import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/index',
    pathMatch:'full'
  },
  {
    path: 'login',
    component: LoginPageComponent,
    children:[]
  },
  {
    path: 'index',
    component:IndexPageComponent,
    children:[]
  },
  // {
  //   path: 'navbar',
  //   component: NavbarComponent,
  //   children:[]
  // },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
