import { Component, EventEmitter, Input, Output } from '@angular/core';
import { bobaAddOnForm, bobaForm } from '../../../forms/boba/bobaForm';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-boba-form',
  standalone: false,
  templateUrl: './boba-form.html',
  styleUrl: './boba-form.scss'
})
export class BobaForm {
  @Input() bobaForm = bobaForm();
  @Output() bobaFormChange = new EventEmitter<BobaForm>();
  constructor() {}

  onSubmit() {
    this.bobaFormChange.emit(this.bobaForm.value);
  }

  get addOnArray(): FormArray {
    return this.bobaForm.get('addOn') as FormArray;
  }

  addAddOn() {
    console.log(this.bobaForm)
    this.addOnArray.push(bobaAddOnForm());
  }

  removeAddOn(index: number) {
    this.addOnArray.removeAt(index);
  }
}
