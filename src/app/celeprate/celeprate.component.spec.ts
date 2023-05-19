import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeleprateComponent } from './celeprate.component';

describe('CeleprateComponent', () => {
  let component: CeleprateComponent;
  let fixture: ComponentFixture<CeleprateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeleprateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeleprateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
