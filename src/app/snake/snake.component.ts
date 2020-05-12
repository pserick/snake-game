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
  private increaseQueue = [];

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
    const snakePieces = [];
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

    const snakeBody = {
      type: 'snake',
      part: 'body',
      direction: SnakeComponent.DIRECTIONS.right,
    };

    const snakeHead = {
      type: 'snake',
      part: 'head',
      direction: SnakeComponent.DIRECTIONS.right,
    };

    const snakeTail = {
      type: 'snake',
      part: 'tail',
      direction: SnakeComponent.DIRECTIONS.right,
    };

    matrix[7][7].isFullFilled = true;
    matrix[7][7].filledObject = snakeTail;

    matrix[8][7].isFullFilled = true;
    matrix[8][7].filledObject = snakeBody;

    matrix[9][7].isFullFilled = true;
    matrix[9][7].filledObject = snakeBody;

    matrix[10][7].isFullFilled = true;
    matrix[10][7].filledObject = snakeBody;

    matrix[11][7].isFullFilled = true;
    matrix[11][7].filledObject = snakeBody;

    matrix[12][7].isFullFilled = true;
    matrix[12][7].filledObject = snakeBody;

    matrix[13][7].isFullFilled = true;
    matrix[13][7].filledObject = snakeBody;

    matrix[14][7].isFullFilled = true;
    matrix[14][7].filledObject = snakeBody;

    matrix[15][7].isFullFilled = true;
    matrix[15][7].filledObject = snakeBody;

    matrix[16][7].isFullFilled = true;
    matrix[16][7].filledObject = snakeBody;

    matrix[17][7].isFullFilled = true;
    matrix[17][7].filledObject = snakeBody;

    matrix[18][7].isFullFilled = true;
    matrix[18][7].filledObject = snakeHead;

    this.matrix = matrix;
    this.calculateSnakePieces(matrix);

    this.move();
  }

  private calculateSnakePieces(matrix): void {
    const snakePieces = [];

    matrix.map(line => {
      const filledFrames = line.filter(c => c.isFullFilled && c.filledObject.type === 'snake');
      filledFrames.map((fl) => {
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

  // private increaseSnakeSize(pxToIncrease: number): void {
  //   const newDirectionsQueueLength = this.newDirectionsQueue.length;
  //   const newDirection = this.newDirectionsQueue[newDirectionsQueueLength - 1];
  //   let direction = snakeHead.direction;
  //
  //   if (newDirection) {
  //     this.newDirectionsQueue.pop();
  //
  //     if (this.isValidMovement(newDirection.value, snakeHead.direction)) {
  //       direction = newDirection;
  //     }
  //   }
  // }

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
      const newHeadElement = this.matrix[newHeadX][newHeadY];
      const newTailElement = this.matrix[newTailX][newTailY];

      if (newHeadElement.isFullFilled && newHeadElement.filledObject.type === 'snake') {
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

      oldTailElement.isFullFilled = false;
      oldTailElement.filledObject = {};

      newTailElement.filledObject.part = 'tail';

      this.calculateSnakePieces(this.matrix);
    }, this.snakeSpeed);
  }

  public changeDirection(newDirectionKey: string): void {
    const newDirection = SnakeComponent.DIRECTIONS[newDirectionKey];
    this.newDirectionsQueue.push(newDirection);
  }

  ngOnInit(): void {

  }
}
