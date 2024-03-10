import { Routes } from '@angular/router';
import { AirportsComponent } from './airports/airports.component';
import { AirportDetailsComponent } from './airport-details/airport-details.component';

export const routes: Routes = [
    { path: '', component: AirportsComponent },
    { path: 'airport-details/:id', component: AirportDetailsComponent },
    { path: '**', redirectTo: '' }
];
