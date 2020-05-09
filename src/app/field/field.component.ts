import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.styl']
})

export class FieldComponent implements OnInit {
  width = '700';
  height = '400';

  constructor() { }

  ngOnInit(): void {
  }

}
