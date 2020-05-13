import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Cookies from 'js-cookie';

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

  public currentMatrix = this.matrixSource.asObservable();
  public currentScore = this.scoreSource.asObservable();
  public currentHighScore = this.highScoreSource.asObservable();

  constructor() {
    const highScore = Cookies.get('high_score') ? Number(Cookies.get('high_score')) : 0;

    this.highScoreSource.next(highScore);
  }

  public setMatrix(matrix: any): void {
    this.matrixSource.next(matrix);
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
