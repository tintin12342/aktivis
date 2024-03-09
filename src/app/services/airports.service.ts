import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API } from '../../environments/environment';
import { Observable } from 'rxjs';
import { TokenResponse } from '../model/TokenResponse';
import { Airports, LocationSubType } from '../model/Airports';
import { SSRCheck } from '../shared/SSRCheck';

@Injectable({
  providedIn: 'root',
})
export class AirportsService extends SSRCheck {
  private http = inject(HttpClient);

  getBearerToken(): Observable<TokenResponse> {
    const body = new URLSearchParams();
    body.set('grant_type', 'client_credentials');
    body.set('client_id', API.key);
    body.set('client_secret', API.secret);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post<TokenResponse>(
      `/api/v1/security/oauth2/token`,
      body,
      {
        headers: headers,
      }
    );
  }

  getAirports(input: string): Observable<Airports> {
    const params = new HttpParams()
      .set('keyword', input)
      .set('subType', LocationSubType.AIRPORT);

    const headers = new HttpHeaders({
      Authorization: `${localStorage.getItem('Authorization')}`,
    });

    return this.http.get<Airports>('/api/v1/reference-data/locations', {
      params,
      headers,
    });
  }
}
