import { Component, HostListener, OnInit} from '@angular/core';

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
  public matrix = [];

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
    this.mountInitialSnake(10);
    this.move();
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

  private increaseSnakeSize(framesToIncrease: number): void {
    this.increaseSnake += framesToIncrease;
  }

  private findNewTailPosition(tailX, tailY, direction) {
    switch (direction) {
      case SnakeComponent.DIRECTIONS.right.value:
        return [tailX + 1, tailY];
        break;
      case SnakeComponent.DIRECTIONS.left.value:
        return [tailX - 1, tailY];
        break;
      case SnakeComponent.DIRECTIONS.top.value:
        return [tailX, tailY - 1];
        break;
      case SnakeComponent.DIRECTIONS.bottom.value:
        return [tailX, tailY + 1];
        break;
    }
  }

  private findNewHeadPosition(headX, headY, direction) {
    switch (direction) {
      case SnakeComponent.DIRECTIONS.right.value:
        return [headX + 1, headY];
        break;
      case SnakeComponent.DIRECTIONS.left.value:
        return [headX - 1, headY];
        break;
      case SnakeComponent.DIRECTIONS.top.value:
        return [headX, headY - 1];
        break;
      case SnakeComponent.DIRECTIONS.bottom.value:
        return [headX, headY + 1];
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

      const newTailElementIndex = this.findNewTailPosition(tailX, tailY, snakeTail.direction.value);
      const newHeadElementIndex = this.findNewHeadPosition(headX, headY, snakeHead.direction.value);

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

      if (this.increaseSnake > 0) {
        this.increaseSnake -= 1;
      } else {
        oldTailElement.isFullFilled = false;
        oldTailElement.filledObject = {};

        newTailElement.filledObject.part = 'tail';
      }

      this.calculateSnakePieces(this.matrix);
    }, this.snakeSpeed);
  }

  public changeDirection(newDirectionKey: string): void {
    const newDirection = SnakeComponent.DIRECTIONS[newDirectionKey];
    this.newDirectionsQueue.push(newDirection);
    this.increaseSnakeSize(1);
  }

  ngOnInit(): void {

  }
}
