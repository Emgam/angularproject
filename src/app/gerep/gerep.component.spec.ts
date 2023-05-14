import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerepComponent } from './gerep.component';

describe('GerepComponent', () => {
  let component: GerepComponent;
  let fixture: ComponentFixture<GerepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
