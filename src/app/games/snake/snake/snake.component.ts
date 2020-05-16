import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../service/data/data.service';
import { SnakeDirection, SnakeDirections } from './snake-directions';
import { Subscription } from 'rxjs';
import { Direction, Frame, Part, Type } from '../service/data/frame.interface';

interface SnakePiece {
  width: number;
  height: number;
  top: number;
  left: number;
  direction: Direction;
  part: Part;
  index: [number, number];
}

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.styl']
})

export class SnakeComponent implements OnInit, OnDestroy {
  private matrix: Frame[][] = [];
  private newDirectionsQueue: Direction[] = [];
  private snakeSpeed = 50;
  private intervalId: ReturnType<typeof setInterval>;
  private increaseSnake = 0;
  private matrixSubscription: Subscription;
  private moveSubscription: Subscription;

  public snakePieces: SnakePiece[] = [];

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const snakeDirection = SnakeDirections.getSnakeDirectionByKeyPressValue(event.key);

    if (snakeDirection) {
      this.changeDirection(snakeDirection.direction);
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

  private calculateSnakePieces(matrix): SnakePiece[] {
    const snakePieces: SnakePiece[] = [];

    matrix.map(line => {
      const filledFramesBySnake = line.filter(c => c.isFullFilled && c.filledBy.type === Type.snake);
      filledFramesBySnake.map((fl) => {
        snakePieces.push(
          {
            width: this.data.frameSize,
            height: this.data.frameSize,
            top: fl.top,
            left: fl.left,
            direction: fl.filledBy.direction,
            part: fl.filledBy.part,
            index: fl.index,
          }
        );
      });
    });

    return snakePieces;
  }

  private isValidMovement(newDirection: Direction, headDirection: Direction): boolean {
    const headDirectionObj: SnakeDirection = SnakeDirections.getSnakeDirectionByDirection(headDirection);

    return headDirectionObj.allowedMovements.includes(newDirection);
  }

  private stop(): void {
    clearInterval(this.intervalId);
  }

  private findNextFrameByDirection(posX, posY, direction) {
    switch (direction) {
      case Direction.right:
        return [posX + 1, posY];
        break;
      case Direction.left:
        return [posX - 1, posY];
        break;
      case Direction.up:
        return [posX, posY - 1];
        break;
      case Direction.down:
        return [posX, posY + 1];
        break;
    }
  }

  private move(): void {
    this.intervalId = setInterval(() => {
      const matrixCopy = [...this.matrix];
      const snakeHead = this.snakePieces.find(piece => piece.part === Part.head);
      const snakeTail = this.snakePieces.find(piece => piece.part === Part.tail);
      const headX = snakeHead.index[0];
      const headY = snakeHead.index[1];
      const tailX = snakeTail.index[0];
      const tailY = snakeTail.index[1];

      const newTailElementIndex = this.findNextFrameByDirection(tailX, tailY, snakeTail.direction);
      const newHeadElementIndex = this.findNextFrameByDirection(headX, headY, snakeHead.direction);

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
        if (newHeadElement.isFullFilled && newHeadElement.filledBy.type === Type.snake) {
          throw new Error('snake collision detected!');
        }
      } catch (e) {
        console.log('border or snake collision detected!');
        this.data.endGame();
        this.newDirectionsQueue = [];
        return;
      }

      const foodWasCaught = newHeadElement.isFullFilled && newHeadElement.filledBy.type === Type.food;

      if (foodWasCaught) {
        this.data.incrementScore(150);
        this.increaseSnake += 5;
      }

      // If there is no need to increase the snake size
      // only move the tail to the forward position
      if (!this.increaseSnake) {
        oldTailElement.isFullFilled = false;
        oldTailElement.filledBy = {
          type: Type.empty,
          part: Part.empty,
          direction: Direction.empty,
        };

        newTailElement.filledBy.part = Part.tail;
      } else {
        this.increaseSnake -= 1;
      }

      oldHeadElement.filledBy.part = Part.body;

      const newDirectionsQueueLength = this.newDirectionsQueue.length;
      const newDirection = this.newDirectionsQueue[newDirectionsQueueLength - 1];
      let direction = snakeHead.direction;

      if (newDirection) {
        this.newDirectionsQueue.pop();

        if (this.isValidMovement(newDirection, snakeHead.direction)) {
          direction = newDirection;
        }
      }

      newHeadElement.isFullFilled = true;
      newHeadElement.filledBy = {
        type: Type.snake,
        part: Part.head,
        direction,
      };

      this.data.setMatrix(matrixCopy);
    }, this.snakeSpeed);
  }

  public changeDirection(newDirection: Direction): void {
    this.newDirectionsQueue.push(newDirection);
  }
}
