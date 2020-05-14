import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.styl']
})

export class FieldComponent implements OnInit {
  public width: number;
  public height: number;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.width = this.data.fieldSizeX;
    this.height = this.data.fieldSizeY;
  }
}
