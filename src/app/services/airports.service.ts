import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API } from '../../environments/environment';
import { Observable, catchError, map, throwError } from 'rxjs';
import { TokenResponse } from '../model/TokenResponse';
import { Airports, LocationSubType } from '../model/Airports';
import { SSRCheck } from '../shared/SSRCheck';
import { AirportDetails } from '../model/AirportDetails';

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

    return this.http
      .post<TokenResponse>(`/api/v1/security/oauth2/token`, body, {
        headers: headers,
      })
      .pipe(
        catchError((err) => {
          return throwError(() => err.error.errors[0].detail);
        })
      );
  }

  getAirports(input: string): Observable<Airports> {
    const params = new HttpParams()
      .set('keyword', input)
      .set('subType', LocationSubType.AIRPORT);

    const headers = new HttpHeaders({
      Authorization: `${localStorage.getItem('Authorization')}`,
    });

    return this.http
      .get<Airports>('/api/v1/reference-data/locations', {
        params,
        headers,
      })
      .pipe(
        catchError((err) => {
          return throwError(() => err.error.errors[0].detail);
        }),
        map((response: Airports) => {
          if (response.data.length > 5) {
            response.data = response.data.slice(0, 5);
          }
          return response;
        })
      );
  }

  getAirportDetails(id: string): Observable<AirportDetails> {
    const headers = new HttpHeaders({
      Authorization: `${localStorage.getItem('Authorization')}`,
    });

    return this.http
      .get<AirportDetails>(`/api/v1/reference-data/locations/${id}`, {
        headers,
      })
      .pipe(
        catchError((err) => {
          return throwError(() => err.error.errors[0].detail);
        })
      );
  }
}
