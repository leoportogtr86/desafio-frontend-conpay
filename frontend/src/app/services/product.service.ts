import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Produto} from '../models/produto.model'


@Injectable({

  providedIn: "root"
})



export class ProductService {


  url: string = "http://localhost:8080/products/"



  constructor(private http: HttpClient) { 

  }


  getProducts(): Observable<Produto[]> {


    return this.http.get<Produto[]>(this.url)   

   
  }

  
}
