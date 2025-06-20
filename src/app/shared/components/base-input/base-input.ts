import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-base-input',
  standalone: false,
  templateUrl: './base-input.html',
  styleUrl: './base-input.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BaseInput),
      multi: true,
    },
  ],
})

export class BaseInput implements ControlValueAccessor {
  @Input() type = 'text';
  @Input() id = '';
  @Input() require = false;
  @Input() errorMessage = '';
  @Input() isShowError = false;
  @Input() placeholder = '';
  @Input() label = '';

  value = '';
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(val: any): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.onTouched();
  }

}
