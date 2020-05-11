import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.styl']
})

export class FieldComponent implements OnInit {
  private frame = 8;
  width = this.frame * 100;
  height = this.frame * 50;

  constructor() { }

  ngOnInit(): void {
  }

}
