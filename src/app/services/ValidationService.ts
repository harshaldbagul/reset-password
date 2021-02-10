import { AbstractControl, FormGroup } from '@angular/forms';

export class ValidationService {

    static oneUppercaseCharacter(control: AbstractControl): { [key: string]: any } | null {
        if (/[A-Z]/.test(control.value)) {
            return null;
        } else {
            return { 'noUppercaseCharacter': true };
        }
    }

    static oneNumericCharacter(control: AbstractControl): { [key: string]: any } | null {
        if (/[0-9]/.test(control.value)) {
            return null;
        } else {
            return { 'noNumericCharacter': true };
        }
    }

    static matchPassword(formGroup: FormGroup): void {
        const passwordControl = formGroup.controls["password"];
        const confirmPasswordControl = formGroup.controls["confirmPassword"];

        if (!passwordControl || !confirmPasswordControl) {
            return null;
        }

        if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
            return null;
        }

        if (passwordControl.value !== confirmPasswordControl.value) {
            confirmPasswordControl.setErrors({ passwordMismatch: true });
        } else {
            confirmPasswordControl.setErrors(null);
        }
    }

}
