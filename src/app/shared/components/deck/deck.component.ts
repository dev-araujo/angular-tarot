import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { ServiceService } from '../../../services/service.service';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-deck',
  standalone: true,
  imports: [NgFor, AsyncPipe, MatTooltipModule],
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.scss',
})
export class DeckComponent {
  deck: Observable<any> = new Observable<[]>();
  @Input() flipped!: boolean;

  service = inject(ServiceService);

  ngOnInit(): void {
    this.deck = this.service.getCards();
  }
}
