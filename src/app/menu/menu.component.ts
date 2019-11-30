import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public contador:number = 0
 
  clicou(){
    this.contador = this.contador + 1

  }


}

//cada componente tem seu proprio -property bind e events binds-