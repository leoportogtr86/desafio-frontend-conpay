import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Produto} from '../../shared/produto.model'

@Injectable({

  providedIn: "root"
})
export class ProductService {


  url: string = "http://localhost:8080/products"
  produtos: Produto[] = []


  constructor(private http: HttpClient) { 

  }

  getProducts(){

    
    this.http.get(this.url)
        .subscribe((res)=>{

          console.log(res)
          
          

        })
  }
}
