import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListMenuComponent } from './game-list-menu.component';

describe('GameListMenuComponent', () => {
  let component: GameListMenuComponent;
  let fixture: ComponentFixture<GameListMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameListMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
