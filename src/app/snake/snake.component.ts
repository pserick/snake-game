import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '../service/data/data.service';

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

  private matrix = [];
  private snakeSpeed = 50;
  private intervalId: ReturnType<typeof setInterval>;
  private newDirectionsQueue = [];
  private increaseSnake = 0;
  public snakePieces = [];

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const directionKey = Object.keys(SnakeComponent.DIRECTIONS).find(d =>
      SnakeComponent.DIRECTIONS[d].keyPressValue === event.key
    );

    if (directionKey) {
      this.changeDirection(directionKey);
    }
  }

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentMatrix.subscribe(matrix => {
      this.matrix = matrix;
      this.snakePieces = this.calculateSnakePieces(matrix);
    });

    this.mountInitialSnake(10);
    this.move();
  }

  private mountInitialSnake(snakeSize: number): void {
    const initialPositionX = 7;
    const initialPositionY = 10;
    const initialDirection = SnakeComponent.DIRECTIONS.right;
    const matrixCopy = [...this.matrix];

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

    this.data.setMatrix(matrixCopy);
  }

  private calculateSnakePieces(matrix): any[] {
    const snakePieces = [];

    matrix.map(line => {
      const filledFramesBySnake = line.filter(c => c.isFullFilled && c.filledObject.type === 'snake');
      filledFramesBySnake.map((fl) => {
        snakePieces.push(
          {
            width: this.data.frameSize,
            height: this.data.frameSize,
            top: fl.top,
            left: fl.left,
            direction: fl.filledObject.direction,
            part: fl.filledObject.part,
            index: fl.index,
          }
        );
      });
    });

    return snakePieces;
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
      const matrixCopy = [...this.matrix];
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

      const oldHeadElement = matrixCopy[headX][headY];
      const oldTailElement = matrixCopy[tailX][tailY];
      const newTailElement = matrixCopy[newTailX][newTailY];
      let newHeadElement;

      try {
        newHeadElement = matrixCopy[newHeadX][newHeadY];
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
        this.data.incrementScore(150);
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

      this.data.setMatrix(matrixCopy);
    }, this.snakeSpeed);
  }

  public changeDirection(newDirectionKey: string): void {
    const newDirection = SnakeComponent.DIRECTIONS[newDirectionKey];
    this.newDirectionsQueue.push(newDirection);
  }
}
