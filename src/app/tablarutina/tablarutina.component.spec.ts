import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablarutinaComponent } from './tablarutina.component';

describe('TablarutinaComponent', () => {
  let component: TablarutinaComponent;
  let fixture: ComponentFixture<TablarutinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablarutinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablarutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
