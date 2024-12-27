import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenUrl = 'https://localhost:9002/authorizationserver/oauth/token';
  private registerUrl =
    'https://localhost:9002/occ/v2/electronics-spa/users?lang=en&curr=USD';

  constructor(private http: HttpClient) { }

  // Fetch OAuth Token
  getToken(): Observable<any> {
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', 'test_client');
    body.set('client_secret', 'secret');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(this.tokenUrl, body.toString(), { headers });
  }

  // Register User
  registerUser(token: string, user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    const params = {
      lang: 'en',
      curr: 'USD',
    };

    return this.http.post(this.registerUrl, JSON.stringify(user), {
      headers,
      params,
    });
  }
}
