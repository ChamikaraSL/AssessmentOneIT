import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndOneComponent } from './front-end-one.component';

describe('FrontEndOneComponent', () => {
  let component: FrontEndOneComponent;
  let fixture: ComponentFixture<FrontEndOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontEndOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
