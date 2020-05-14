import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-snake-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.styl']
})
export class ViewComponent implements OnInit, OnDestroy  {

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.startNewGame();
  }

  ngOnDestroy() {
    this.data.endGame();
  }
}
