import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardproduct',
  templateUrl: './cardproduct.component.html',
  styleUrls: ['./cardproduct.component.css']
})
export class CardproductComponent implements OnInit {

  // name: string = "Guitar"
  // details: string = "Suhr - Scott Henderson Signature"
  // price: number =  3495
  // image: string = "https://www.suhr.com/wp-content/uploads/SKU/01-SIG-0001.jpg"

  produtos = [

    {
       name:"Guitar",
       details:"Suhr - Scott Henderson Signature",
       price:3495,
       image:"https://www.suhr.com/wp-content/uploads/SKU/01-SIG-0001.jpg"
    },

    {
       name:"Guitar",
       details:"Suhr - Mateus Asato Classic T",
       price:4999,
       image:"https://www.suhr.com/wp-content/uploads/SKU/01-SIG-0030.jpg"
    },

    {
       name:"Amp",
       details:"Marshall - JCM800 2203",
       price:5600,
       image:"https://marshalldotcom.blob.core.windows.net/assets/content/uploads/455d5035-b4c7-4fe2-a0a8-558dd8f3d708.jpg?20200827150712"
    },

    {
       name:"Headphone",
       details:"arshall -  OVER-EAR",
       price:1200,
       image:"https://marshalldotcom.blob.core.windows.net/assets/content/uploads/7770f0dc-963f-4d41-baa2-d8f883e4f6de.jpg?20190509152320"
    }


  ]



  constructor() { }

  ngOnInit(): void {
  }

}
