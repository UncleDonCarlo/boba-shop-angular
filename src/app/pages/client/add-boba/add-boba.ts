import { Component } from '@angular/core';
import { bobaForm } from '../../../forms/boba/bobaForm';

@Component({
  selector: 'app-add-boba',
  standalone: false,
  templateUrl: './add-boba.html',
  styleUrl: './add-boba.scss'
})
export class AddBoba {
  bobaForm = bobaForm();

  constructor() {}

  OnSubmit(bobaForm : any) {
    this.bobaForm = bobaForm
    console.log(this.bobaForm)
  }

}
