import { Component, OnInit } from '@angular/core';
import { EstadosService } from './service/estado.service';
import { EstadoDTO } from './dto/Estado.dto'

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  constructor(private estadoService: EstadosService) { }
  estados: EstadoDTO[]
  estado: EstadoDTO 
  ngOnInit() {

    this.estadoService.getEstados().subscribe(retorno => {
      this.estados = retorno
    })


  }

}
