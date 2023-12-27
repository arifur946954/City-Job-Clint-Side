import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MEmployeeComponent } from './memployee.component';

describe('MEmployeeComponent', () => {
  let component: MEmployeeComponent;
  let fixture: ComponentFixture<MEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
