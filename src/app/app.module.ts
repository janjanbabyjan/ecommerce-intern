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
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { ProductService } from './service/product.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    IndexPageComponent,
    NavbarComponent,
    ProductListComponent,
    AccountComponent,
    SlideBarComponent,
    ProductDetailsComponent,
    FooterComponent,
    RegisterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  

  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
