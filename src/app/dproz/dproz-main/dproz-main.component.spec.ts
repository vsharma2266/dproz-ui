import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DprozMainComponent } from './dproz-main.component';

describe('DprozMainComponent', () => {
  let component: DprozMainComponent;
  let fixture: ComponentFixture<DprozMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DprozMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DprozMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
