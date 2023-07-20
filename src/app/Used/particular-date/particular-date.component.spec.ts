import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularDateComponent } from './particular-date.component';

describe('ParticularDateComponent', () => {
  let component: ParticularDateComponent;
  let fixture: ComponentFixture<ParticularDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticularDateComponent]
    });
    fixture = TestBed.createComponent(ParticularDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
