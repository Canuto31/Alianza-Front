import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'http://localhost:8090/alianza/api/cliente';

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<Client[]>(url);
  }
}
