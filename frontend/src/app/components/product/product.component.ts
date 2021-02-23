import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {Produto} from '../../models/produto.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  // nomeProduto: string = ''

  

  constructor(private product: ProductService) {     



  }

  ngOnInit(): void {
  }

  // buscar(res: Event): void{


  //   this.nomeProduto = (<HTMLInputElement>res.target).value 


  // }

  


  

}
