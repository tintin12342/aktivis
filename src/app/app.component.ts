import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AirportsService } from './services/airports.service';
import { TokenResponse } from './model/TokenResponse';
import { SSRCheck } from './shared/SSRCheck';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent extends SSRCheck implements OnInit {
  airportsService = inject(AirportsService);

  ngOnInit() {
    this.airportsService.getBearerToken().subscribe((res: TokenResponse) => {
      if (SSRCheck.hasSSRRendered()) {
        localStorage.setItem(
          'Authorization',
          `${res.token_type} ${res.access_token}`
        );
      }
    });
  }
}
