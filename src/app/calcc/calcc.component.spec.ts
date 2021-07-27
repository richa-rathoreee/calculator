import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalccComponent } from './calcc.component';

describe('CalccComponent', () => {
  let component: CalccComponent;
  let fixture: ComponentFixture<CalccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
