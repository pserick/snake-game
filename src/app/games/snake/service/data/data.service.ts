import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Cookies from 'js-cookie';
import { Direction, Frame, Type, Part } from './frame.interface';

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

  private mountInitialSnake(snakeSize: number, matrix: Frame[][]): Frame[][] {
    const initialPositionX = 7;
    const initialPositionY = 10;

    const matrixCopy = [...matrix];

    Array(snakeSize).fill('').map((_, index) => {
      let part = Part.body;

      if (index === 0) {
        part = Part.tail;
      } else if (index === (snakeSize - 1)) {
        part = Part.head;
      }
      const snakePiece = {
        type: Type.snake,
        part,
        direction: Direction.right,
      };

      matrixCopy[initialPositionX + index][initialPositionY].isFullFilled = true;
      matrixCopy[initialPositionX + index][initialPositionY].filledBy = snakePiece;
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

  public setMatrix(matrix: Frame[][]): void {
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

  private createEmptyFrame(left: number, top: number, index: [number, number]): Frame {
    const emptyFrame: Frame = {
      left,
      top,
      isFullFilled: false,
      filledBy: {
        type: Type.empty,
        part: Part.empty,
        direction: Direction.empty,
      },
      index,
    };

    return emptyFrame;
  }

  private createEmptyMatrix(): Frame[][] {
    const matrix = Array(this.fieldSizeX / this.frameSize)
      .fill('')
      .map((_, indexWidth) => Array(this.fieldSizeY / this.frameSize).fill('')
        .map((__, indexHeight) =>
          this.createEmptyFrame(
            indexWidth * this.frameSize,
            indexHeight * this.frameSize,
            [indexWidth, indexHeight]
          )));

    return matrix;
  }
}
