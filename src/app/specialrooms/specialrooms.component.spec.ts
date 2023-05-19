import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialroomsComponent } from './specialrooms.component';

describe('SpecialroomsComponent', () => {
  let component: SpecialroomsComponent;
  let fixture: ComponentFixture<SpecialroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialroomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
