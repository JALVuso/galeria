import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Imagen } from '../imagen';
import { Item } from './item';

describe('Item', () => {
  let component: Item;
  let fixture: ComponentFixture<Item>;

  const foto: Imagen = { id: 1, titulo: 'Playa', src: 'img/amanecer.jpg' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Item],
    }).compileComponents();

    fixture = TestBed.createComponent(Item);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('imagen', foto);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the photo received via input', () => {
    const img = (fixture.nativeElement as HTMLElement).querySelector('img');
    expect(img?.getAttribute('src')).toBe(foto.src);
    expect(img?.getAttribute('alt')).toBe(foto.titulo);
  });

  it('should emit the photo when clicked', async () => {
    let emitida: Imagen | undefined;
    component.seleccionada.subscribe((value) => (emitida = value));

    (fixture.nativeElement as HTMLButtonElement).querySelector('button')!.click();
    await fixture.whenStable();

    expect(emitida).toEqual(foto);
  });
});
