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




}
