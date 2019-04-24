import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharequeryComponent } from './sharequery.component';

describe('SharequeryComponent', () => {
  let component: SharequeryComponent;
  let fixture: ComponentFixture<SharequeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharequeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharequeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
