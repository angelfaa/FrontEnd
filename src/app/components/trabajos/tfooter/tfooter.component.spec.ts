import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfooterComponent } from './tfooter.component';

describe('TfooterComponent', () => {
  let component: TfooterComponent;
  let fixture: ComponentFixture<TfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
