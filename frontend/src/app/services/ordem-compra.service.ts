import { Injectable } from '@angular/core';

import {Pedido} from '../models/pedido.model'

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  constructor() { }
  
  efetivarCompra(pedido: Pedido): void{

    console.log('ordem de compra...')
    
  }
}


  
