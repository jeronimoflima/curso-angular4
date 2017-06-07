import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropertComponent } from './output-propert.component';

describe('OutputPropertComponent', () => {
  let component: OutputPropertComponent;
  let fixture: ComponentFixture<OutputPropertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPropertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
