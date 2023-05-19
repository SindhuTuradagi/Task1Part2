import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  registrationSuccessful: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

   // Register form submission
   register() {
    if (this.registerForm.valid) {
      // Perform registration logic
      // For example, you can display a success message and reset the form
      this.registrationSuccessful = true;
      this.registerForm.reset();
    } else {
      // If the form is invalid, mark all fields as touched to show validation errors
      this.markAllFieldsAsTouched();
    }
  }

  // Marks all fields in the form as touched
  markAllFieldsAsTouched() {
    Object.values(this.registerForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}