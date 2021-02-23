import { Injectable } from '@angular/core';

import {ItemCarrinho} from '../models/item-carrinho.model'



@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {




  itemCarrinho: ItemCarrinho[] = []

  constructor() { }
}
