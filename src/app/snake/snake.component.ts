import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../service/data/data.service';
import { SnakeDirections } from './snake-directions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.styl']
})

export class SnakeComponent implements OnInit, OnDestroy {
  private matrix = [];
  private snakeSpeed = 50;
  private intervalId: ReturnType<typeof setInterval>;
  private newDirectionsQueue = [];
  private increaseSnake = 0;
  private matrixSubscription: Subscription;
  private moveSubscription: Subscription;

  public snakePieces = [];

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const directionKey = Object.keys(SnakeDirections.DIRECTIONS).find(d =>
      SnakeDirections.DIRECTIONS[d].keyPressValue === event.key
    );

    if (directionKey) {
      this.changeDirection(directionKey);
    }
  }

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.matrixSubscription = this.data.currentMatrix.subscribe(matrix => {
      this.matrix = matrix;
      this.snakePieces = this.calculateSnakePieces(matrix);
    });

    this.moveSubscription = this.data.currentMoveSnake.subscribe(moveSnake => {
      this.stop();
      if (moveSnake === true) {
        this.move();
      }
    });
  }

  ngOnDestroy(): void {
    this.data.endGame();
    this.matrixSubscription.unsubscribe();
    this.moveSubscription.unsubscribe();
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
    const newDirection = SnakeDirections.DIRECTIONS[newDirectionKey];
    const allowedMovements = headDirection.allowedMovements;

    return newDirection && allowedMovements.includes(newDirection.value);
  }

  private stop(): void {
    clearInterval(this.intervalId);
  }

  private findNextFrameByDirection(posX, posY, direction) {
    switch (direction) {
      case SnakeDirections.DIRECTIONS.right.value:
        return [posX + 1, posY];
        break;
      case SnakeDirections.DIRECTIONS.left.value:
        return [posX - 1, posY];
        break;
      case SnakeDirections.DIRECTIONS.top.value:
        return [posX, posY - 1];
        break;
      case SnakeDirections.DIRECTIONS.bottom.value:
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
        this.data.endGame();
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
    const newDirection = SnakeDirections.DIRECTIONS[newDirectionKey];
    this.newDirectionsQueue.push(newDirection);
  }
}
