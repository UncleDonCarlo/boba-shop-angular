import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-button',
  standalone: false,
  templateUrl: './base-button.html',
  styleUrl: './base-button.scss'
})
export class BaseButton {
  @Input({ required: true }) btnTitle!: string;
  @Input() isLoading: boolean = false;
  @Input() isDisableButton: boolean = false;
  @Output() isLoadingChange = new EventEmitter<boolean>();

  handleClicked(){
    this.isLoading = !this.isLoading;
    this.isLoadingChange.emit(this.isLoading);
  }

}
