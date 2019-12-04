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
    this.getUsuarios();
  }

  public salvar() {
    this.usuarioService.salvar(this.usuario).subscribe(
      result => {
        alert('deu good')

      },
      error => alert('deu brad')
    )
  }

  public getUsuarios() {
    this.usuarioService.getUsuarios().subscribe(result => this.usuarios = result,
      error => alert('deu brad'))
  }
}




}
