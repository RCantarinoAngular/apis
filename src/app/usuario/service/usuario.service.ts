import { Injectable } from '@angular/core';
import { Usuario } from '../dto/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private url = ''

  constructor(private http: HttpClient) { }


  public getUsuario(): Usuario {
    let usr = new Usuario()
    usr.nome = 'renato'
    usr.email = 'renato@gmail.com'

    return usr
  }

  public salvar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario)
  }

  public getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url)
  }




}
