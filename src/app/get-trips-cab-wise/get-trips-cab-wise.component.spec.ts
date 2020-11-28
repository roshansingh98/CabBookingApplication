import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTripsCabWiseComponent } from './get-trips-cab-wise.component';

describe('GetTripsCabWiseComponent', () => {
  let component: GetTripsCabWiseComponent;
  let fixture: ComponentFixture<GetTripsCabWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTripsCabWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTripsCabWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
