import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-recusada',
  templateUrl: './recusada.component.html',
  styleUrls: ['./recusada.component.css']
})
export class RecusadaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  voltar(): void{

    this.router.navigate(['/produtos'])
  }

}
