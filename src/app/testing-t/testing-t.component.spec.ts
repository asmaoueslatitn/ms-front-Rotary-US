import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingTComponent } from './testing-t.component';


describe('TestingTComponent', () => {
  let component: TestingTComponent;
  let fixture: ComponentFixture<TestingTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
