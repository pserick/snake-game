import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.styl']
})
export class FoodComponent implements OnInit {
  public snakeFoods = [];

  private randomIntFromIntervalAndFrame(min: number, max: number, frame: number): number {
    return Math.round((Math.random() * (max - min) + min) / frame) * frame;
  }

  private generateFoodInARandomPosition(): void {
    const { offsetWidth, offsetHeight } = document.getElementById('field');
    const frame = 8;

    this.snakeFoods.push({
      width: frame,
      height: frame,
      top: this.randomIntFromIntervalAndFrame(0, (offsetHeight - frame), frame),
      left: this.randomIntFromIntervalAndFrame(0, (offsetWidth - frame), frame),
    });
    this.snakeFoods.push({
      width: frame,
      height: frame,
      top: this.randomIntFromIntervalAndFrame(0, (offsetHeight - frame), frame),
      left: this.randomIntFromIntervalAndFrame(0, (offsetWidth - frame), frame),
    });
    this.snakeFoods.push({
      width: frame,
      height: frame,
      top: this.randomIntFromIntervalAndFrame(0, (offsetHeight - frame), frame),
      left: this.randomIntFromIntervalAndFrame(0, (offsetWidth - frame), frame),
    });
    this.snakeFoods.push({
      width: frame,
      height: frame,
      top: this.randomIntFromIntervalAndFrame(0, (offsetHeight - frame), frame),
      left: this.randomIntFromIntervalAndFrame(0, (offsetWidth - frame), frame),
    });
    this.snakeFoods.push({
      width: frame,
      height: frame,
      top: this.randomIntFromIntervalAndFrame(0, (offsetHeight - frame), frame),
      left: this.randomIntFromIntervalAndFrame(0, (offsetWidth - frame), frame),
    });
    this.snakeFoods.push({
      width: frame,
      height: frame,
      top: this.randomIntFromIntervalAndFrame(0, (offsetHeight - frame), frame),
      left: this.randomIntFromIntervalAndFrame(0, (offsetWidth - frame), frame),
    });
    this.snakeFoods.push({
      width: frame,
      height: frame,
      top: this.randomIntFromIntervalAndFrame(0, (offsetHeight - frame), frame),
      left: this.randomIntFromIntervalAndFrame(0, (offsetWidth - frame), frame),
    });
    this.snakeFoods.push({
      width: frame,
      height: frame,
      top: this.randomIntFromIntervalAndFrame(0, (offsetHeight - frame), frame),
      left: this.randomIntFromIntervalAndFrame(0, (offsetWidth - frame), frame),
    });
    this.snakeFoods.push({
      width: frame,
      height: frame,
      top: this.randomIntFromIntervalAndFrame(0, (offsetHeight - frame), frame),
      left: this.randomIntFromIntervalAndFrame(0, (offsetWidth - frame), frame),
    });
    this.snakeFoods.push({
      width: frame,
      height: frame,
      top: this.randomIntFromIntervalAndFrame(0, (offsetHeight - frame), frame),
      left: this.randomIntFromIntervalAndFrame(0, (offsetWidth - frame), frame),
    });

  }

  constructor() { }

  ngOnInit(): void {
    this.generateFoodInARandomPosition();
  }

}
