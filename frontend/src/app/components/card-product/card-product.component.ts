import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Produto } from './../../models/produto.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {



  

  public produtos: Produto[] = []



  constructor(private productService: ProductService) { 



  }

  ngOnInit(): void {


  }





  

  

}
