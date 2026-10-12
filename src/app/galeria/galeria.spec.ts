import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Galeria } from './galeria';

describe('Galeria', () => {
  let component: Galeria;
  let fixture: ComponentFixture<Galeria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Galeria],
    }).compileComponents();

    fixture = TestBed.createComponent(Galeria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have photos in the array', () => {
    expect(component.imagenes.length).toBeGreaterThan(1);
    expect(component.imagenes[0].src).toBeTruthy();
  });

  it('should start with no photo enlarged', () => {
    expect(component.ampliada()).toBeNull();
  });

  it('should enlarge a photo when its card is clicked', async () => {
    const card = (fixture.nativeElement as HTMLElement).querySelector(
      'app-galeria-item button',
    ) as HTMLButtonElement;
    card.click();
    await fixture.whenStable();

    expect(component.ampliada()).toEqual(component.imagenes[0]);
    expect((fixture.nativeElement as HTMLElement).querySelector('.visor')).not.toBeNull();
  });

  it('should close the viewer with cerrar()', async () => {
    component.ampliada.set(component.imagenes[0]);
    await fixture.whenStable();

    component.cerrar();
    await fixture.whenStable();

    expect(component.ampliada()).toBeNull();
    expect((fixture.nativeElement as HTMLElement).querySelector('.visor')).toBeNull();
  });
});
