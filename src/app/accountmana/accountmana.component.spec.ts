import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountmanaComponent } from './accountmana.component';

describe('AccountmanaComponent', () => {
  let component: AccountmanaComponent;
  let fixture: ComponentFixture<AccountmanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountmanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountmanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
