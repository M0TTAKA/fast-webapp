import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastingplanComponent } from './fastingplan.component';

describe('FastingplanComponent', () => {
  let component: FastingplanComponent;
  let fixture: ComponentFixture<FastingplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastingplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastingplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
