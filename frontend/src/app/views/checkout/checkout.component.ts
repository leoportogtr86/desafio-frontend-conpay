import { Component, OnInit } from '@angular/core';

import {OrdemCompraService} from '../../services/ordem-compra.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  constructor(private ordem: OrdemCompraService) { }

  ngOnInit(): void {
  }

}
