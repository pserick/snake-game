import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../service/data/data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit, OnDestroy {
  public width: number;
  public height: number;
  public showMenu: boolean;
  private showMenuSubscription: Subscription;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.width = this.data.fieldSizeX;
    this.height = this.data.fieldSizeY;

    this.showMenuSubscription = this.data.currentShowMenu.subscribe(showMenu => this.showMenu = showMenu);
  }

  ngOnDestroy(): void {
    this.showMenuSubscription.unsubscribe();
  }

  public startNewGame(): void  {
    this.data.startNewGame();
  }
}
