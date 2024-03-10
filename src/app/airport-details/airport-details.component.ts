import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AirportDetails } from '../model/AirportDetails';
import { AirportsService } from '../services/airports.service';
import { SSRCheck } from '../shared/SSRCheck';

@Component({
  selector: 'app-airport-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './airport-details.component.html',
  styleUrl: './airport-details.component.css',
})
export class AirportDetailsComponent extends SSRCheck implements OnInit {
  airportsService = inject(AirportsService);
  route = inject(ActivatedRoute);

  id: string | undefined = undefined;
  airportDetails: AirportDetails | undefined = undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      if (this.id && SSRCheck.hasSSRRendered()) {
        const data = localStorage.getItem(this.id);
        
        if (data) {
          this.airportDetails = JSON.parse(data);
        } else {
          this.airportsService
            .getAirportDetails(this.id)
            .subscribe((details: AirportDetails) => {
              this.airportDetails = details;
            });
        }
      }
    });
  }

  onSubmit(formGroup: NgForm) {
    const formData = formGroup.value;
    if (SSRCheck.hasSSRRendered() && this.airportDetails) {
      let editedForm: AirportDetails = {
        ...this.airportDetails,
      };
      editedForm.data.name = formData.name;
      editedForm.data.address.cityName = formData.cityName;
      editedForm.data.address.countryName = formData.countryName;
      localStorage.setItem(editedForm.data.id, JSON.stringify(editedForm));
    }
  }
}
