import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { AirportsService } from '../services/airports.service';
import { Airports } from '../model/Airports';
import { BehaviorSubject, Observable, debounceTime } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-airports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './airports.component.html',
  styleUrl: './airports.component.css',
})
export class AirportsComponent implements OnInit, OnDestroy {
  airportsService = inject(AirportsService);
  cdr = inject(ChangeDetectorRef);

  airportData$: Observable<Airports> | undefined = undefined;
  searchInput$: BehaviorSubject<unknown> = new BehaviorSubject<unknown>('');
  input = '';

  ngOnInit() {
    this.searchInput$.pipe(debounceTime(300)).subscribe((event) => {
      if (event) {
        const searchValue = (event as HTMLInputElement).value;
        this.input = searchValue;
        if (searchValue.trim() !== '') {
          this.airportData$ = this.airportsService.getAirports(searchValue);
          this.cdr.detectChanges();
        } else {
          this.airportData$ = undefined;
          this.cdr.detectChanges();
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.searchInput$.unsubscribe();
  }
}
