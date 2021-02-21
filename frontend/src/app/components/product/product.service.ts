import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Produto} from '../../shared/produto.model'

@Injectable()
export class ProductService {


  url: string = "http://localhost:8080/products"
  produtos: Produto[] = []


  constructor(private http: HttpClient) { 

    this.http.get(this.url)
        .subscribe((res)=>{

          console.log(res)
          

        })
  }




  getProducts(){

    return 'produtos...'
  }
}
