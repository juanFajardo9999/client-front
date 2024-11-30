import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getClientInfo(tipoDocumento: string, numeroDocumento: string): Observable<any> {
    const url = `${this.baseUrl}/${tipoDocumento}/${numeroDocumento}`;
    return this.http.get(url);
  }
}

