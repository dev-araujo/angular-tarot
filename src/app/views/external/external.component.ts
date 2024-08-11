import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-external',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './external.component.html',
  styleUrl: './external.component.scss',
})
export class ExternalComponent {}
