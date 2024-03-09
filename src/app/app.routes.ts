import { Routes } from '@angular/router';
import { AirportsComponent } from './airports/airports.component';

export const routes: Routes = [
    { path: '', component: AirportsComponent },
    { path: '**', redirectTo: '' }
];
