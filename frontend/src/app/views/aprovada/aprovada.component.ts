import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-aprovada',
  templateUrl: './aprovada.component.html',
  styleUrls: ['./aprovada.component.css']
})
export class AprovadaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar(): void{

    this.router.navigate(['/produtos'])

    


  }

}
