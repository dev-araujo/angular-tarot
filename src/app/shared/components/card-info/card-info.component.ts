import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../../services/service.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { TarotCard } from '../../../models/tarot.interface';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [AsyncPipe, NgIf, JsonPipe, RouterLink, NgFor, MatTooltipModule],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.scss',
})
export class CardInfoComponent {
  cardNumber!: string;
  card!: Observable<TarotCard | any>;

  constructor(private router: Router, private service: ServiceService) {
    this.getInfoUrl();
  }

  getInfoUrl() {
    const urlSegments = this.router.url.split('/');
    this.cardNumber = urlSegments[urlSegments.length - 1];
  }

  ngOnInit(): void {
    this.card = this.service.getOneCard(this.cardNumber);
  }
}
