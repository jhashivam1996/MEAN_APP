import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedqueryComponent } from './recievedquery.component';

describe('RecievedqueryComponent', () => {
  let component: RecievedqueryComponent;
  let fixture: ComponentFixture<RecievedqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievedqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
