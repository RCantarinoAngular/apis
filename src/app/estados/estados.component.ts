import { Component, OnInit } from '@angular/core';
import { EstadosService } from './service/estado.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  constructor(private estadoService: EstadosService) { }
  estados: any = []
  ngOnInit() {

    this.estadoService.getEstados().subscribe(retorno => {
      this.estados = retorno
    })


  }

}
