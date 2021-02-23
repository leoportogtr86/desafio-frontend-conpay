import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Produto } from './../../models/produto.model';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})





export class CardProductComponent implements OnInit {


  nomeProduto: string = ''
  produtoEncontrado: boolean = true

  

  public produtos: Produto[] = []



  constructor(private productService: ProductService) { 




  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((res)=>{

      this.produtos = res
      console.log(res)
    })    

  }

  buscar(res: Event): void{


    this.nomeProduto = (<HTMLInputElement>res.target).value 

    this.productService.getProductsByName((<HTMLInputElement>res.target).value).subscribe((res)=>{
      this.produtos = res

      console.log(res.length)

      if(res.length == 0){

        this.produtoEncontrado = !false
        console.log(this.produtoEncontrado)


      } else {

        this.produtoEncontrado = !true
        console.log(this.produtoEncontrado)

      }


    })


  }





  

  

}
