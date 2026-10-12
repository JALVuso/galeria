import { Component, input, output } from '@angular/core';
import { Imagen } from '../imagen';

@Component({
  selector: 'app-galeria-item',
  styleUrl: './item.css',
  templateUrl: './item.html',
})
export class Item {
  readonly imagen = input.required<Imagen>();

  readonly seleccionada = output<Imagen>();
}
