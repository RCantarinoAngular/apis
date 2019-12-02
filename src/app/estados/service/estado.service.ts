import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstadoDTO } from '../dto/Estado.dto';


@Injectable({
    providedIn: 'root'
})
export class EstadosService {

    url = 'http://servicodados.ibge.gov.br/api/v1/localidades/estados'
    constructor(private httpClient: HttpClient) { }


    public getEstados(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.url)
    }
}
