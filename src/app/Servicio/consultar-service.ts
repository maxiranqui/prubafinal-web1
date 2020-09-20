import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConsultarService{
    [x: string]: any;
    constructor(private httpClient: HttpClient){}

    getCliente(): Observable<any>{
        return this.httpClient.get('./assets/Cliente.json');
    }
}     