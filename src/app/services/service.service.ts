import { Injectable } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
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

  shuffle(): Observable<TarotCard[]> {
    return this.getCards().pipe(
      map((cards: TarotCard[]) =>
        cards
          .map((value: TarotCard) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
      )
    );
  }

  getOneCard(num: string): Observable<TarotCard | any> {
    return this.getCards().pipe(
      map((cards: TarotCard[]) => {
        return cards.find((card) => card.number === num);
      })
    );
  }
}
