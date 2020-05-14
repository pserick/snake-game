import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../service/data/data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.styl']
})
export class FoodComponent implements OnInit, OnDestroy {
  public snakeFoods = [];
  private matrixSubscription: Subscription;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.matrixSubscription = this.data.currentMatrix.subscribe(matrix => {
      this.snakeFoods = this.calculateFoodPieces(matrix);

      if (this.snakeFoods.length === 0) {
        this.generateFoodInARandomPosition(25, matrix);
      }
    });
  }

  ngOnDestroy(): void {
    this.matrixSubscription.unsubscribe();
  }

  public generateFoodInARandomPosition(quantity: number, matrix: any[]): void {
    const matrixCopy = [...matrix];

    Array(quantity).fill('').map((_, index) => {
      let isFrameOccupied = true;
      let frameX;
      let frameY;

      while (isFrameOccupied) {
        const Xrange = [0, this.data.fieldSizeX - this.data.frameSize];
        const Yrange = [0, this.data.fieldSizeY - this.data.frameSize];
        frameX =  this.randomIntFromIntervalAndFrame(Xrange[0], Xrange[1], this.data.frameSize) / this.data.frameSize;
        frameY =  this.randomIntFromIntervalAndFrame(Yrange[0], Yrange[1], this.data.frameSize) / this.data.frameSize;

        isFrameOccupied = matrixCopy[frameX][frameY].isFullFilled;
      }

      matrixCopy[frameX][frameY].isFullFilled = true;
      matrixCopy[frameX][frameY].filledObject = {
        type: 'food',
      };
    });

    this.data.setMatrix(matrixCopy);
  }

  private randomIntFromIntervalAndFrame(min: number, max: number, frame: number): number {
    return Math.round((Math.random() * (max - min) + min) / frame) * frame;
  }

  private calculateFoodPieces(matrix): any[] {
    const snakeFoods = [];

    matrix.map(line => {
      const filledFramesByFood = line.filter(c => c.isFullFilled && c.filledObject.type === 'food');

      filledFramesByFood.map((fl) => {
        snakeFoods.push(
          {
            width: this.data.frameSize,
            height: this.data.frameSize,
            top: fl.top,
            left: fl.left,
            index: fl.index,
          }
        );
      });
    });

    return snakeFoods;
  }
}