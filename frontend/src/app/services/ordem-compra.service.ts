import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs'

import {Pedido} from '../models/pedido.model'

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  constructor(private http: HttpClient) { }
  
  efetivarCompra(pedido: Pedido): Observable<any>{

    console.log(pedido)

    return this.http.post('http://localhost:8080/pedidos', pedido)
    
  }
}


  
