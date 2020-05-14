import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list-menu',
  templateUrl: './game-list-menu.component.html',
  styleUrls: ['./game-list-menu.component.styl']
})


export class GameListMenuComponent implements OnInit {

  public gamesAvailable = [];

  constructor() { }

  ngOnInit(): void {
    this.gamesAvailable = [
      {
        name: 'Snake Game',
        path: '/snake',
        img: 'assets/images/snake-game.gif',
      }
    ];
  }
}
