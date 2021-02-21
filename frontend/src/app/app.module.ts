import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'
import { HomeComponent } from './views/home/home.component'
import {MatCardModule} from '@angular/material/card';
import { ProdutosComponent } from './views/produtos/produtos.component';
import {MatButtonModule} from '@angular/material/button';
import { CheckoutComponent } from './views/checkout/checkout.component'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import { CardformComponent } from './components/cardform/cardform.component';
import { ProductComponent } from './components/product/product.component';
import {ProductService} from './components/product/product.service';
import { CardproductComponent } from './components/cardproduct/cardproduct.component'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutosComponent,
    CheckoutComponent,
    CardformComponent,
    ProductComponent,
    CardproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
