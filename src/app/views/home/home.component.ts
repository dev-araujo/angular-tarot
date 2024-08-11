import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DeckComponent } from '../../shared/components/deck/deck.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, DeckComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  flipped = true;

  flip() {
    this.flipped = !this.flipped;
  }
}
