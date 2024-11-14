import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8000/auth/login';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = { correo:email, contraseña:password };
    return this.http.post<any>(this.apiUrl, body);
  }
}