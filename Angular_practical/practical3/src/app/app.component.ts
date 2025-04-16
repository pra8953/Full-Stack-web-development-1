import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = [
    '🍎 Apple',
    '🍌 Banana',
    '🍇 Grapes',
    '🍍 Pineapple',
    '🍊 Orange',
    '🍉 Watermelon',
    '🥭 Mango',
    '🍓 Strawberry',
    '🍒 Cherry',
    '🥝 Kiwi'
  ];
  
}
