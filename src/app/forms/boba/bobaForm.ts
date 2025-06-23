import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

export function bobaForm(): FormGroup {
  return new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
    ]),
    price: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(1)
    ]),
    addOn: new FormArray([])
  });
}

export function bobaAddOnForm(): FormGroup {
  return new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
    ]),
    price: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(1)
    ]),
  });
}
