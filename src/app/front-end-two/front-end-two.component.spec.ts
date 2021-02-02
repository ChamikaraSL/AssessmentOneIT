import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndTwoComponent } from './front-end-two.component';

describe('FrontEndTwoComponent', () => {
  let component: FrontEndTwoComponent;
  let fixture: ComponentFixture<FrontEndTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontEndTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
