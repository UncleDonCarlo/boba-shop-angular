import { Component, ElementRef, ViewChild } from '@angular/core';
import { BobaForm } from '../../../shared/components/boba-form/boba-form';

@Component({
  selector: 'app-add-boba',
  standalone: false,
  templateUrl: './add-boba.html',
  styleUrl: './add-boba.scss'
})
export class AddBoba {
  @ViewChild('childRef') child!: BobaForm;

  constructor() {}

  OnSubmit(bobaForm : any) {
    localStorage.setItem('products', JSON.stringify(bobaForm))
  }

  getNameFromChild(){
    console.log("this.child.bobaForm.get('name')?.value", this.child.bobaForm.get('name')?.value)
  }

}
