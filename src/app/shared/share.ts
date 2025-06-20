import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthBgTemplateComponent } from './layouts/auth-bg-template/auth-bg-template';
import { BaseInput } from './components/base-input/base-input';
import { BaseButton } from './components/base-button/base-button';

@NgModule({
  declarations: [
    AuthBgTemplateComponent,
    BaseInput,
    BaseButton
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AuthBgTemplateComponent,
    BaseInput,
    BaseButton
  ]
})
export class SharedModule {}
