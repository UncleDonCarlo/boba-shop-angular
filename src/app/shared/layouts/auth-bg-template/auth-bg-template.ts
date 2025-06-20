import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-bg-template',
  standalone: false,
  templateUrl: './auth-bg-template.html',
  styleUrls: ['./auth-bg-template.scss'],
})
export class AuthBgTemplateComponent implements OnInit {
  @Input()
  title: string = '';

  @Input()
  text: string = '';

  constructor() {}

  ngOnInit() {

  }
}
