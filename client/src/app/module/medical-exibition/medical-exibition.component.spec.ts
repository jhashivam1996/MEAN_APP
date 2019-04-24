import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalExibitionComponent } from './medical-exibition.component';

describe('MedicalExibitionComponent', () => {
  let component: MedicalExibitionComponent;
  let fixture: ComponentFixture<MedicalExibitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalExibitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalExibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
