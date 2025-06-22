import { Component } from '@angular/core';
import { bobaForm } from '../../../forms/boba/bobaForm';

@Component({
  selector: 'app-boba-form',
  standalone: false,
  templateUrl: './boba-form.html',
  styleUrl: './boba-form.scss'
})
export class BobaForm {
  bobaForm = bobaForm();

  constructor() {}
}
