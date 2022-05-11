import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionqsComponent } from './seccionqs.component';

describe('SeccionqsComponent', () => {
  let component: SeccionqsComponent;
  let fixture: ComponentFixture<SeccionqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
