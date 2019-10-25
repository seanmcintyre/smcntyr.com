import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoHollyComponent } from './logo-holly.component';

describe('LogoHollyComponent', () => {
  let component: LogoHollyComponent;
  let fixture: ComponentFixture<LogoHollyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoHollyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoHollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
