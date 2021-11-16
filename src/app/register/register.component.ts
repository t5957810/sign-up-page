import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

function passwordNumberCheckValidator(control: FormControl) {
  const password = control.value;
  if (password && password.trim().length > 0) {
    const stringArray = [...password];
    let hasNumber = false; 
    for (let i = 0; i < stringArray.length; i++) {
      if (!isNaN(Number(stringArray[i]))) {
        hasNumber = true;
        break;
      }
    }

    return (hasNumber) ? null : {
      oneNumberError: {
        hasNumber: hasNumber
      }
    }
  }
  return null;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  password: string = '';
  isShowPassword = false;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null, [Validators.minLength(8), passwordNumberCheckValidator]),
      isAgree: new FormControl(null),
    });
  }

  showPassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  create() {
    console.log(this.form.value);
  }

}
