import { Component, HostListener, signal } from '@angular/core';
import { Imagen } from './imagen';
import { Item } from './item/item';

@Component({
  imports: [Item],
  selector: 'app-galeria',
  styleUrl: './galeria.css',
  templateUrl: './galeria.html',
})
export class Galeria {
  /**
   * Los datos viven AQUÍ, en un array del componente (requisito de la actividad).
   * Las rutas apuntan a public/img/ (en el build quedan en la raíz: img/foto.jpg).
   *
  readonly imagenes: Imagen[] = [
    { id: 1, titulo: 'Amanecer', src: 'img/amanecer.jpg' },
    { id: 2, titulo: 'Montaña', src: 'img/montana.jpg' },
    { id: 3, titulo: 'Bosque', src: 'img/bosque.jpg' },
    { id: 4, titulo: 'Ciudad', src: 'img/ciudad.jpg' },
    { id: 5, titulo: 'Laguna', src: 'img/laguna.jpg' },
    { id: 6, titulo: 'Dunas', src: 'img/dunas.jpg' },
    { id: 7, titulo: 'Cascada', src: 'img/cascada.jpg' },
    { id: 8, titulo: 'Nieve', src: 'img/nieve.jpg' },
  ];*/
  readonly imagenes: Imagen[] = [];

  constructor() {
    this.imagenes.push({ id: 1, titulo: 'Amanecer', src: 'img/amanecer.jpg' });
    this.imagenes.push({ id: 2, titulo: 'Montaña', src: 'img/montana.jpg' });
    this.imagenes.push({ id: 3, titulo: 'Bosque', src: 'img/bosque.jpg' });
    this.imagenes.push({ id: 4, titulo: 'Ciudad', src: 'img/ciudad.jpg' });
    this.imagenes.push({ id: 5, titulo: 'Laguna', src: 'img/laguna.jpg' });
    this.imagenes.push({ id: 6, titulo: 'Dunas', src: 'img/dunas.jpg' });
    this.imagenes.push({ id: 7, titulo: 'Cascada', src: 'img/cascada.jpg' });
    this.imagenes.push({ id: 8, titulo: 'Nieve', src: 'img/nieve.jpg' });
  }

  /** Estado de la interacción: qué foto está ampliada (null = ninguna). */
  readonly ampliada = signal<Imagen | null>(null);

  /** Cierra el visor grande (clic en la ✕, en el fondo o Escape). */
  cerrar(): void {
    this.ampliada.set(null);
  }

  @HostListener('document:keydown.escape')
  cerrarConEscape(): void {
    this.cerrar();
  }
}
