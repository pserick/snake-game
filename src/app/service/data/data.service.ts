import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Cookies from 'js-cookie';
import { SnakeDirections } from '../../snake/snake-directions';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public frameSize = 8;
  public fieldSizeX = 100 * this.frameSize;
  public fieldSizeY = 50 * this.frameSize;
  private matrixSource = new BehaviorSubject<any>(this.createEmptyMatrix());
  private scoreSource = new BehaviorSubject<number>(0);
  private highScoreSource = new BehaviorSubject<number>(0);
  private showMenuSource = new BehaviorSubject<boolean>(false);
  private moveSnakeSource = new BehaviorSubject<boolean>(true);

  public currentMatrix = this.matrixSource.asObservable();
  public currentScore = this.scoreSource.asObservable();
  public currentHighScore = this.highScoreSource.asObservable();
  public currentShowMenu = this.showMenuSource.asObservable();
  public currentMoveSnake = this.moveSnakeSource.asObservable();

  constructor() {
    const highScore = Cookies.get('high_score') ? Number(Cookies.get('high_score')) : 0;
    this.highScoreSource.next(highScore);
  }

  private mountInitialSnake(snakeSize: number, matrix: any[]): any[] {
    const initialPositionX = 7;
    const initialPositionY = 10;
    const initialDirection = SnakeDirections.DIRECTIONS.right;
    const matrixCopy = [...matrix];

    Array(snakeSize).fill('').map((_, index) => {
      let part = 'body';

      if (index === 0) {
        part = 'tail';
      } else if (index === (snakeSize - 1)) {
        part = 'head';
      }
      const snakePiece = {
        type: 'snake',
        part,
        direction: initialDirection,
      };

      matrixCopy[initialPositionX + index][initialPositionY].isFullFilled = true;
      matrixCopy[initialPositionX + index][initialPositionY].filledObject = snakePiece;
    });

    return matrixCopy;
  }

  public startNewGame(): void {
    this.setShowMenu(false);
    this.setMoveSnake(true);
    this.scoreSource.next(0);
    const freshMatrix = this.mountInitialSnake(10, this.createEmptyMatrix());

    this.setMatrix(freshMatrix);
  }

  public setMatrix(matrix: any): void {
    this.matrixSource.next(matrix);
  }

  public endGame(): void {
    this.setShowMenu(true);
    this.setMoveSnake(false);
  }

  public setShowMenu(showMenu: boolean): void {
    if (showMenu !== this.showMenuSource.getValue()) {
      this.showMenuSource.next(showMenu);
    }
  }

  public setMoveSnake(moveSnake: boolean): void {
    if (moveSnake !== this.moveSnakeSource.getValue()) {
      this.moveSnakeSource.next(moveSnake);
    }
  }

  public incrementScore(score): void {
    const newScore = this.scoreSource.getValue() + score;
    const currentHighScore = this.highScoreSource.getValue();

    if (newScore > currentHighScore) {
      Cookies.set('high_score', newScore, { expires: 365 * 10 });
      this.highScoreSource.next(newScore);
    }

    this.scoreSource.next(newScore);
  }

  private createEmptyMatrix(): any {
    const matrix = Array(this.fieldSizeX / this.frameSize)
      .fill('')
      .map((_, indexWidth) => Array(this.fieldSizeY / this.frameSize).fill('').map((__, indexHeight) => ({
        left: indexWidth * this.frameSize,
        top: indexHeight * this.frameSize,
        isFullFilled: false,
        filledObject: {
          type: '',
          part: '',
          direction: {},
        },
        index: [indexWidth, indexHeight],
      })));

    return matrix;
  }
}
