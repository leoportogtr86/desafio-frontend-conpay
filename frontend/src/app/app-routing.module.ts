import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {ProdutosComponent} from './views/produtos/produtos.component';
import {CheckoutComponent} from './views/checkout/checkout.component'
import {AprovadaComponent} from './views/aprovada/aprovada.component'
import {RecusadaComponent} from './views/recusada/recusada.component'
import {CarrinhoComponent} from './views/carrinho/carrinho.component'




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


  },

  {
      path: "aprovada",
      component: AprovadaComponent


  },

  {
      path: "recusada",
      component: RecusadaComponent


  },

  {
      path: "carrinho",
      component: CarrinhoComponent


  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
