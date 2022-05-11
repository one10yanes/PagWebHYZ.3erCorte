import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccioninicioComponent } from './seccioninicio.component';

describe('SeccioninicioComponent', () => {
  let component: SeccioninicioComponent;
  let fixture: ComponentFixture<SeccioninicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccioninicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccioninicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
