import { AbstractControl } from '@angular/forms'; // Step-1
// Logical Implemenatation
// Existing Logic - javascript validation code 
//CustomValidators.passwordStrength
export class CustomValidators {

  static passwordStrength(control: AbstractControl) {

    if (CustomValidators.isEmptyValue(control.value)) {
      return null;
    }

    return control.value.match(/^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^&\*]{8,}$/) ? null : { 'weakPassword': true };
  }

  static passwordMatcher(control: AbstractControl) {

    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;

    if (CustomValidators.isEmptyValue(password) || CustomValidators.isEmptyValue(confirmPassword)) {
      return null;
    }

    return password === confirmPassword ? null : { 'mismatch': true };
  }

  static isEmptyValue(value: any) {
    return value === null || typeof value === 'string' && value.length === 0;
  }


  static ValidatePhone(control: AbstractControl): {[key: string]: any} | null  {
    if (control.value && control.value.length != 10) {
      return { 'phoneNumberInvalid': true };
    }
    return null;
  }
}

//EMAIL_REGEX = "^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$";
// phone: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],