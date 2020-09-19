import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaclienteComponent } from './tablacliente.component';

describe('TablaclienteComponent', () => {
  let component: TablaclienteComponent;
  let fixture: ComponentFixture<TablaclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
