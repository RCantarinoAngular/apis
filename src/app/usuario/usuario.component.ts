import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './service/usuario.service';
import { Usuario } from './dto/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public usuario: Usuario
  public usuarios: Usuario[]
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario()
    this.usuarios = this.usuarioService.getUsuarios()
  }

}
