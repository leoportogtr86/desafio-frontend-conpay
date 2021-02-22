import { Injectable } from '@angular/core';

import {Carrinho} from '../models/carrinho.model'


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  carrinho: Carrinho[] = []

  constructor() { }
}
