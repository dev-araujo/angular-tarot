import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import tarot from '../../data/tarot.json';
import { TarotCard } from '../models/tarot.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  getCards(): Observable<TarotCard[]> {
    return of(
      tarot.cards.map((card: any) => ({
        ...card,
        backside: tarot.imageBackCard,
      }))
    );
  }
}
