import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormGroup, FormControl } from '@angular/forms';

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
  inputFormControl: FormControl;

  constructor(private controlContainer: ControlContainer) { }

  ngOnInit() {
      this.inputFormGroup = <FormGroup>this.controlContainer.control;
      this.inputFormControl = <FormControl>this.inputFormGroup.controls[this.formCtrlName];
  }

  isValid() {
    // return this.inputFormGroup.valid;
    return !(this.inputFormControl.errors !== null && (this.inputFormControl.dirty || this.inputFormControl.touched));
  }

}
