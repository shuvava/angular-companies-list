import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputComponent } from './form-input.component';
import { FormsModule, ReactiveFormsModule, ControlContainer, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-component-wrapper',
  template: '<form [formGroup]="registerForm"><app-form-input type="number" formCtrlName="id" title="id"></app-form-input></form>'
})
class WrapperComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [1, ],
      name: ['test', ],
    });
  }
}

describe('FormInputComponent', () => {
  let component: FormInputComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormInputComponent,
        WrapperComponent,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        ControlContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.debugElement.children[0].children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
