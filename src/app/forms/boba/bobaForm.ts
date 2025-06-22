import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

export function bobaForm(): FormGroup {
  return new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
    ]),
    price: new FormControl<number>(0, [
      Validators.required,
    ]),
    addOn: new FormArray([])
  });
}
