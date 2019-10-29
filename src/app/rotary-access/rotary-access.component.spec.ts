import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaryAccessComponent } from './rotary-access.component';

describe('RotaryAccessComponent', () => {
  let component: RotaryAccessComponent;
  let fixture: ComponentFixture<RotaryAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotaryAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaryAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
