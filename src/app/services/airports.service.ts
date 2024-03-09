import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API } from '../../environments/environment';
import { Observable } from 'rxjs';
import { TokenResponse } from '../model/TokenResponse';

@Injectable({
  providedIn: 'root',
})
export class AirportsService {
  http = inject(HttpClient);

  getBearerToken(): Observable<TokenResponse> {
    let body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', API.key);
    body.set('client_secret', API.secret);

    let heraders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post<TokenResponse>(
      `/api/v1/security/oauth2/token`,
      body,
      {
        headers: heraders,
      }
    );
  }
}
