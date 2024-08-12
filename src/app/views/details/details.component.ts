import { Component } from '@angular/core';
import { CardInfoComponent } from '../../shared/components/card-info/card-info.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CardInfoComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {}
