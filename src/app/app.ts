import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Galeria } from './galeria/galeria';

@Component({
  imports: [RouterOutlet, Galeria],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
