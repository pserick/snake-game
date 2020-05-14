import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit {
  public width: number;
  public height: number;
  public showMenu: boolean;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.width = this.data.fieldSizeX;
    this.height = this.data.fieldSizeY;

    this.data.currentShowMenu.subscribe(showMenu => this.showMenu = showMenu);
  }

  public startNewGame(): void  {
    this.data.startNewGame();
  }
}
