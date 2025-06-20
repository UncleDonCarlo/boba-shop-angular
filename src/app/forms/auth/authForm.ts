// src/app/forms/auth/authForm.ts
import { FormControl, FormGroup, Validators } from "@angular/forms";

export function authForm(): FormGroup {
  return new FormGroup({
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });
}
