import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import {Produto} from '../../shared/produto.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  

  constructor(private product: ProductService) {     

  }

  ngOnInit(): void {
  }

  mostrarProduto(): void{

    console.log(this.product.getProducts())


  }


  

}
