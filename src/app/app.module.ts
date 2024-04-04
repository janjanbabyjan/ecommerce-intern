import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginPageComponent } from './login-page/login-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AccountComponent } from './account/account.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    IndexPageComponent,
    NavbarComponent,
    ProductListComponent,
    AccountComponent,
    SlideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
