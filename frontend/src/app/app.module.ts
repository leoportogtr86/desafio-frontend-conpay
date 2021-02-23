import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon'

import { CheckoutComponent } from './views/checkout/checkout.component'
import {ProductService} from '../app/services/product.service';
import { ProductComponent } from './components/product/product.component';
import { CardFormComponent } from './components/card-form/card-form.component';
import {CardProductComponent} from '../app/components/card-product/card-product.component'
import { ProdutosComponent } from './views/produtos/produtos.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component'
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {CarrinhoService} from './services/carrinho.service'
import {AuthenticationService} from './services/authentication.service'
import {AuthorizationService} from './services/authorization.service';
import { AprovadaComponent } from './views/aprovada/aprovada.component';
import { RecusadaComponent } from './views/recusada/recusada.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import {OrdemCompraService} from './services/ordem-compra.service'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutosComponent,
    CheckoutComponent,
    ProductComponent,
    CardFormComponent,
    CardProductComponent,
    AprovadaComponent,
    RecusadaComponent,
    CarrinhoComponent,
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
    HttpClientModule,
    MatIconModule
  ],
  providers: [ProductService, CarrinhoService, AuthenticationService, AuthorizationService, OrdemCompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
