import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {ProdutosComponent} from './views/produtos/produtos.component';
import {CheckoutComponent} from './views/checkout/checkout.component'

const routes: Routes = [
  
  {

      path: "",
      component: HomeComponent
  },

  {
      path: "produtos",
      component: ProdutosComponent


  },
  {
      path: "checkout",
      component: CheckoutComponent


  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
