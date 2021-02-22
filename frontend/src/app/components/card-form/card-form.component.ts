import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  parcelas: string[] = ["1x - R$ 1000 (Sem Juros)", "2x - R$ 500 (Sem Juros)", "3x - R$ 333,33 (Sem Juros)", "4x - R$ 250 (Sem Juros)" ]


  constructor() { }

  ngOnInit(): void {
  }

}
