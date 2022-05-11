import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgqsComponent } from './pgqs.component';

describe('PgqsComponent', () => {
  let component: PgqsComponent;
  let fixture: ComponentFixture<PgqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PgqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
