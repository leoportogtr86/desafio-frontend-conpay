import { ProductService } from '../../services/product.service';
import { Component, OnInit } from '@angular/core';
import {Produto} from '../../models/produto.model'

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {



  

  produtos: Array<Produto> 
  
//   =  
  



  constructor(private productService: ProductService) { 

   console.log(this.productService.getProducts())
   // console.log(this.produtos)
   this.produtos = this.productService.getProducts()





  }

  ngOnInit(): void {
  }





  

  

}
