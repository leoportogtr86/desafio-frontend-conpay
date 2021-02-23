import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {Produto} from '../../models/produto.model'

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

  buscar(res: Event): void{

    console.log((<HTMLInputElement>res.target).value)

  }

  


  

}
