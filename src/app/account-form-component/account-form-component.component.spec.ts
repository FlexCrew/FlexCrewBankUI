import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFormComponentComponent } from './account-form-component.component';

describe('AccountFormComponentComponent', () => {
  let component: AccountFormComponentComponent;
  let fixture: ComponentFixture<AccountFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
