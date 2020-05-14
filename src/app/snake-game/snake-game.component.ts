import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-snake-game',
  templateUrl: './snake-game.component.html',
  styleUrls: ['./snake-game.component.styl']
})
export class SnakeGameComponent implements OnInit, OnDestroy  {

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.startNewGame();
  }

  ngOnDestroy() {
    this.data.endGame();
  }
}
