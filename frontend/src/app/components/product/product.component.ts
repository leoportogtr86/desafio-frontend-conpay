import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  texto: string = ''
  nome_produto = ''

  constructor(private product: ProductService) { 

    


    this.texto = this.product.getProducts()

  }

  ngOnInit(): void {
  }


  digitar(res: Event): void{

    console.log('digitando...')
    console.log(this.nome_produto)
    this.nome_produto = (<HTMLInputElement>res.target).value
    console.log(this.nome_produto)
  }

}
