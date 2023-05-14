import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesbycategoryComponent } from './salesbycategory.component';

describe('SalesbycategoryComponent', () => {
  let component: SalesbycategoryComponent;
  let fixture: ComponentFixture<SalesbycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesbycategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
