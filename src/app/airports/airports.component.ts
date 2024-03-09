import { Component, OnInit, inject } from '@angular/core';
import { AirportsService } from '../services/airports.service';
import { SSRCheck } from '../shared/SSRCheck';
import { Airports } from '../model/Airports';

@Component({
  selector: 'app-airports',
  standalone: true,
  imports: [],
  templateUrl: './airports.component.html',
  styleUrl: './airports.component.css',
})
export class AirportsComponent extends SSRCheck implements OnInit {
  airportsService = inject(AirportsService);

  ngOnInit() {
    if (SSRCheck.hasSSRRendered()) {
      this.airportsService.getAirports('berlin').subscribe({
        next: (airports: Airports) => {
          console.log(airports);
        },
        error: (error) => {
          console.log('Error while fetching airports', error);
        },
      });
    }
  }
}
