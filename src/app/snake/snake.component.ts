import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.styl']
})

export class SnakeComponent implements OnInit {
  public static DIRECTIONS = {
    top: {
      value: 'top',
      keyPressValue: 'ArrowUp',
      allowedMovements: ['left', 'right'],
    },
    bottom: {
      value: 'bottom',
      keyPressValue: 'ArrowDown',
      allowedMovements: ['left', 'right'],
    },
    left: {
      value: 'left',
      keyPressValue: 'ArrowLeft',
      allowedMovements: ['top', 'bottom'],
    },
    right: {
      value: 'right',
      keyPressValue: 'ArrowRight',
      allowedMovements: ['top', 'bottom'],
    },
  };

  private snakeSpeed = 50;
  private snakeSize = 8;
  private frame = this.snakeSize;
  private intervalId: number;
  private newDirectionsQueue = [];
  private increaseSnake = 0;

  public snakePieces = [];
  public snakeFoods = [];
  public matrix = [];

  public score = 0;

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const directionKey = Object.keys(SnakeComponent.DIRECTIONS).find(d =>
      SnakeComponent.DIRECTIONS[d].keyPressValue === event.key
    );

    if (directionKey) {
      this.changeDirection(directionKey);
    }
  }

  constructor() {
    this.matrix = this.createEmptyMatrix();
    this.generateFoodInARandomPosition(2);
    this.mountInitialSnake(10);
    this.move();
  }

  private randomIntFromIntervalAndFrame(min: number, max: number, frame: number): number {
    return Math.round((Math.random() * (max - min) + min) / frame) * frame;
  }

  private generateFoodInARandomPosition(quantity: number): void {
    // const { offsetWidth, offsetHeight } = document.getElementById('field');

    Array(quantity).fill('').map((_, index) => {
      let isFrameOccupied = true;
      let frameX;
      let frameY;

      while (isFrameOccupied) {
        frameX =  this.randomIntFromIntervalAndFrame(0, (800 - this.frame), this.frame) / 8;
        frameY =  this.randomIntFromIntervalAndFrame(0, (400 - this.frame), this.frame) / 8;

        isFrameOccupied = this.matrix[frameX][frameY].isFullFilled;
      }

      this.matrix[frameX][frameY].isFullFilled = true;
      this.matrix[frameX][frameY].filledObject = {
        type: 'food',
      };
    });

    this.calculateFoodPieces(this.matrix);
  }

  private createEmptyMatrix() {
    const matrix = Array(800 / this.frame)
      .fill('')
      .map((_, indexWidth) => Array(400 / this.frame).fill('').map((__, indexHeight) => ({
        left: indexWidth * this.frame,
        top: indexHeight * this.frame,
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

  private mountInitialSnake(snakeSize: number): void {
    const initialPositionX = 7;
    const initialPositionY = 10;
    const initialDirection = SnakeComponent.DIRECTIONS.right;

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

      this.matrix[initialPositionX + index][initialPositionY].isFullFilled = true;
      this.matrix[initialPositionX + index][initialPositionY].filledObject = snakePiece;
    });

    this.calculateSnakePieces(this.matrix);
  }

  private calculateFoodPieces(matrix): void {
    const snakeFoods = [];

    matrix.map(line => {
      const filledFramesByFood = line.filter(c => c.isFullFilled && c.filledObject.type === 'food');

      filledFramesByFood.map((fl) => {
        snakeFoods.push(
          {
            width: this.frame,
            height: this.frame,
            top: fl.top,
            left: fl.left,
            index: fl.index,
          }
        );
      });
    });

    this.snakeFoods = snakeFoods;
  }

  private calculateSnakePieces(matrix): void {
    const snakePieces = [];

    matrix.map(line => {
      const filledFramesBySnake = line.filter(c => c.isFullFilled && c.filledObject.type === 'snake');
      filledFramesBySnake.map((fl) => {
        snakePieces.push(
          {
            width: this.frame,
            height: this.frame,
            top: fl.top,
            left: fl.left,
            direction: fl.filledObject.direction,
            part: fl.filledObject.part,
            index: fl.index,
          }
        );
      });
    });

    this.snakePieces = snakePieces;
  }

  private isValidMovement(newDirectionKey: string, headDirection): boolean {
    const newDirection = SnakeComponent.DIRECTIONS[newDirectionKey];
    const allowedMovements = headDirection.allowedMovements;

    return newDirection && allowedMovements.includes(newDirection.value);
  }

  private stop(): void {
    clearInterval(this.intervalId);
  }

  private findNextFrameByDirection(posX, posY, direction) {
    switch (direction) {
      case SnakeComponent.DIRECTIONS.right.value:
        return [posX + 1, posY];
        break;
      case SnakeComponent.DIRECTIONS.left.value:
        return [posX - 1, posY];
        break;
      case SnakeComponent.DIRECTIONS.top.value:
        return [posX, posY - 1];
        break;
      case SnakeComponent.DIRECTIONS.bottom.value:
        return [posX, posY + 1];
        break;
    }
  }

  private move(): void {
    this.intervalId = setInterval(() => {
      const snakeHead = this.snakePieces.find(piece => piece.part === 'head');
      const snakeTail = this.snakePieces.find(piece => piece.part === 'tail');
      const headX = snakeHead.index[0];
      const headY = snakeHead.index[1];
      const tailX = snakeTail.index[0];
      const tailY = snakeTail.index[1];

      const newTailElementIndex = this.findNextFrameByDirection(tailX, tailY, snakeTail.direction.value);
      const newHeadElementIndex = this.findNextFrameByDirection(headX, headY, snakeHead.direction.value);

      const newHeadX = newHeadElementIndex[0];
      const newHeadY = newHeadElementIndex[1];
      const newTailX = newTailElementIndex[0];
      const newTailY = newTailElementIndex[1];

      const oldHeadElement = this.matrix[headX][headY];
      const oldTailElement = this.matrix[tailX][tailY];
      const newTailElement = this.matrix[newTailX][newTailY];
      let newHeadElement;

      try {
        newHeadElement = this.matrix[newHeadX][newHeadY];
        if (newHeadElement.isFullFilled && newHeadElement.filledObject.type === 'snake') {
          throw new Error('snake collision detected!');
        }
      } catch (e) {
        console.log('border or snake collision detected!');
        this.stop();
        return;
      }

      const foodWasCaught = newHeadElement.isFullFilled && newHeadElement.filledObject.type === 'food';

      if (foodWasCaught) {
        this.score += 150;
        this.increaseSnake += 5;
      }

      // If there is no need to increase the snake size
      // only move the tail to the forward position
      if (!this.increaseSnake) {
        oldTailElement.isFullFilled = false;
        oldTailElement.filledObject = {};

        newTailElement.filledObject.part = 'tail';
      } else {
        this.increaseSnake -= 1;
      }

      oldHeadElement.filledObject.part = 'body';

      const newDirectionsQueueLength = this.newDirectionsQueue.length;
      const newDirection = this.newDirectionsQueue[newDirectionsQueueLength - 1];
      let direction = snakeHead.direction;

      if (newDirection) {
        this.newDirectionsQueue.pop();

        if (this.isValidMovement(newDirection.value, snakeHead.direction)) {
          direction = newDirection;
        }
      }

      newHeadElement.isFullFilled = true;
      newHeadElement.filledObject = {
        type: 'snake',
        part: 'head',
        direction,
      };

      this.calculateSnakePieces(this.matrix);
      this.calculateFoodPieces(this.matrix);

      if (this.snakeFoods.length === 0) {
        this.generateFoodInARandomPosition(20);
      }

    }, this.snakeSpeed);
  }

  public changeDirection(newDirectionKey: string): void {
    const newDirection = SnakeComponent.DIRECTIONS[newDirectionKey];
    this.newDirectionsQueue.push(newDirection);
  }

  ngOnInit(): void {

  }
}
