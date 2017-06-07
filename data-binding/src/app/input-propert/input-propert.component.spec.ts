import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropertComponent } from './input-propert.component';

describe('InputPropertComponent', () => {
  let component: InputPropertComponent;
  let fixture: ComponentFixture<InputPropertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPropertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
