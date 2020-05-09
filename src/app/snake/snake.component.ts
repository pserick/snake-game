import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.styl']
})
export class SnakeComponent implements OnInit {
  width = '50';
  height = '8';

  constructor() { }

  ngOnInit(): void {
  }

}
