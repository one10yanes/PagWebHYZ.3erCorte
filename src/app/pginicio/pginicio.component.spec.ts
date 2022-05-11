import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PginicioComponent } from './pginicio.component';

describe('PginicioComponent', () => {
  let component: PginicioComponent;
  let fixture: ComponentFixture<PginicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PginicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PginicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
