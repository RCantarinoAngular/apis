import { Injectable } from '@angular/core';
import { Usuario } from '../dto/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }


  public getUsuario(): Usuario {
    let usr = new Usuario()
    usr.nome = 'renato'
    usr.email = 'renato@gmail.com'

    return usr

  }

  public getUsuarios(): Array<Usuario> {
    return [{
        nome: 'usuario 1',
        email: 'usr1@gmail.com'
      },
      {
        nome: 'usuario 2',
        email: 'usr2@gmail.com'
      },
      {
        nome: 'usuario 3',
        email: 'usr3@gmail.com'
      }]

}




}
