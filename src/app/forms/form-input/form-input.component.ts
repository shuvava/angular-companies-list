import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  @Input() title = 'Input';
  @Input() errorMessage = 'Input is not valid';
  @Input() type = 'text';
  @Input() formCtrlName: string;

  inputFormGroup: FormGroup;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
    this.inputFormGroup = <FormGroup>this.controlContainer.control;
  }

  isNotValid() {
    return false;
  }

}
