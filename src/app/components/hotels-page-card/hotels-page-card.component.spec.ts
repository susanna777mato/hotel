import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsPageCardComponent } from './hotels-page-card.component';

describe('HotelsPageCardComponent', () => {
  let component: HotelsPageCardComponent;
  let fixture: ComponentFixture<HotelsPageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelsPageCardComponent]
    });
    fixture = TestBed.createComponent(HotelsPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
