import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDrawFormComponent } from './with-draw-form.component';

describe('WithDrawFormComponent', () => {
  let component: WithDrawFormComponent;
  let fixture: ComponentFixture<WithDrawFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithDrawFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithDrawFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
