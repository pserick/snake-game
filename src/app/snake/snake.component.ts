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

  public touchablePoints = [];

  public snakePieces = [
    {
      width: this.snakeSize * 8,
      height: this.snakeSize,
      top: this.frame * 10,
      left: this.frame * 5,
      direction: SnakeComponent.DIRECTIONS.right,
    }
  ];

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
    this.move();
  }

  private resizeSnakeTail(snakeTail, pxQuantityToChange): any {
    const snakeTailCopy = { ...snakeTail };
    const tailDirection = snakeTailCopy.direction.value;

    if (tailDirection === SnakeComponent.DIRECTIONS.right.value) {
      snakeTailCopy.width += pxQuantityToChange;
      snakeTailCopy.left -= pxQuantityToChange;
    }
    if (tailDirection === SnakeComponent.DIRECTIONS.left.value) {
      snakeTailCopy.width += pxQuantityToChange;
    }
    if (tailDirection === SnakeComponent.DIRECTIONS.top.value) {
      snakeTailCopy.height += pxQuantityToChange;
    }
    if (tailDirection === SnakeComponent.DIRECTIONS.bottom.value) {
      snakeTailCopy.height += pxQuantityToChange;
      snakeTailCopy.top -= pxQuantityToChange;
    }

    return snakeTailCopy;
  }

  private isValidMovement(newDirectionKey: string): boolean {
    const newDirection = SnakeComponent.DIRECTIONS[newDirectionKey];
    const allowedMovements = this.snakePieces[0].direction.allowedMovements;

    return newDirection && allowedMovements.includes(newDirection.value);
  }

  private isHorizontalMovement(direction: string): boolean {
    return direction === SnakeComponent.DIRECTIONS.right.value ||
      direction === SnakeComponent.DIRECTIONS.left.value;
  }

  private shouldRemoveTailFromPiecesArray(snakeTail): boolean {
    const tailDirection = snakeTail.direction.value;

    return this.isHorizontalMovement(tailDirection) ?
      (snakeTail.width === this.snakeSize) :
      (snakeTail.height === this.snakeSize);
  }

  private getSnakeHeadTouchableCoordinate(snakeHead): { left, top } {
    const { left, top, width, height } = snakeHead;
    let touchableCoordinate = {
      left: 0,
      top: 0,
    };

    if (snakeHead.direction.value === SnakeComponent.DIRECTIONS.right.value) {
      touchableCoordinate = { left: (left + width), top: top + this.frame };
    }
    if (snakeHead.direction.value === SnakeComponent.DIRECTIONS.left.value) {
      touchableCoordinate = { left, top: top + this.frame };
    }
    if (snakeHead.direction.value === SnakeComponent.DIRECTIONS.top.value) {
      touchableCoordinate = { left: left + this.frame, top };
    }
    if (snakeHead.direction.value === SnakeComponent.DIRECTIONS.bottom.value) {
      touchableCoordinate = { left: left + this.frame, top: (top + height) };
    }

    return touchableCoordinate;
  }

  private hasCollisionWithBorder(
    snakeHeadTouchableCoordinate: { left; top },
    border: { width: number; height: number }
  ): boolean {
    const { left, top } = snakeHeadTouchableCoordinate;
    const { width, height } = border;
    return left === 0 || top === 0 || left === width || top === height;
  }

  private hasCollisionWithSnakeBody(
    snakeHeadTouchableCoordinate: { left; top },
    snakePieces: Array<any>,
  ): boolean {
    return this.snakePieces.some((piece, index) => {
      // Impossible to collide the first 2 movements
      if (index < 2) {
        return false;
      }

      const snakePieceTouchablePoints = [];
      const snakePieceSize = this.isHorizontalMovement(piece.direction.value) ? piece.width : piece.height;
      const loopsSize = snakePieceSize / this.frame;

      Array(loopsSize).fill('').forEach((_, i) => {
        if (piece.direction.value === SnakeComponent.DIRECTIONS.right.value) {
          snakePieceTouchablePoints.push({
            left: ((piece.left + piece.width) - this.frame) - (i * this.frame),
            top: piece.top
          });
        }
        if (piece.direction.value === SnakeComponent.DIRECTIONS.left.value) {
          snakePieceTouchablePoints.push({
            left: piece.left + (i * this.frame),
            top: piece.top
          });
        }
        if (piece.direction.value === SnakeComponent.DIRECTIONS.top.value) {
          snakePieceTouchablePoints.push({
            left: piece.left,
            top: piece.top + (i * this.frame),
          });
        }
        if (piece.direction.value === SnakeComponent.DIRECTIONS.bottom.value) {
          snakePieceTouchablePoints.push({
            left: piece.left,
            top: ((piece.top + piece.height) - this.frame) - (i * this.frame),
          });
        }
      });

      // this.touchablePoints = snakePieceTouchablePoints;

      return snakePieceTouchablePoints.some((tp) =>
        tp.left === snakeHeadTouchableCoordinate.left && tp.top === snakeHeadTouchableCoordinate.top
      );
    });
  }

  private collisionDetected(snakeHead): boolean {
    const { offsetWidth, offsetHeight } = document.getElementById('field');

    const hasCollisionWithBorder = this.hasCollisionWithBorder(
      this.getSnakeHeadTouchableCoordinate(snakeHead),
      {
        width: offsetWidth,
        height: offsetHeight,
      }
    );

    const hasCollisionWithSnakeBody = this.hasCollisionWithSnakeBody(
      this.getSnakeHeadTouchableCoordinate(snakeHead),
      this.snakePieces,
    );

    return hasCollisionWithBorder || hasCollisionWithSnakeBody;
  }

  private stop(): void {
    clearInterval(this.intervalId);
  }

  private increaseSnakeSize(pxToIncrease: number): void {
    const snakeTail = this.snakePieces[this.snakePieces.length - 1];
    const snakePiecesCopy = [...this.snakePieces];
    const newSnakeTail = this.resizeSnakeTail(snakeTail, pxToIncrease);

    snakePiecesCopy.pop();
    snakePiecesCopy.push(newSnakeTail);


    this.snakePieces = snakePiecesCopy;
  }

  private move(): void {
    this.intervalId = setInterval(() => {
      const snakePiecesCopy = [...this.snakePieces];
      const newDirectionsQueueLength = this.newDirectionsQueue.length;

      if (newDirectionsQueueLength) {
        const lastDirectionFromQueue = this.newDirectionsQueue[newDirectionsQueueLength - 1];
        const newHead = this.createNewSnakeHead(lastDirectionFromQueue);

        snakePiecesCopy.unshift(newHead);
        this.newDirectionsQueue.pop();
      }

      const snakePiecesLength = snakePiecesCopy.length;
      const snakeHead = snakePiecesCopy[0];
      const snakeTail = snakePiecesLength > 1 ? snakePiecesCopy[snakePiecesLength - 1] : null;
      switch (snakeHead.direction.value) {
        case SnakeComponent.DIRECTIONS.top.value:
          if (snakePiecesLength === 1) {
            snakeHead.top -= this.frame;
          } else {
            snakePiecesCopy.pop();

            if (!this.shouldRemoveTailFromPiecesArray(snakeTail)) {
              const newSnakeTail = this.resizeSnakeTail(snakeTail, -(this.frame));

              snakeHead.height += this.frame;
              snakeHead.top -= this.frame;

              snakePiecesCopy.push(newSnakeTail);
            }
          }
          break;
        case SnakeComponent.DIRECTIONS.bottom.value:
          if (snakePiecesLength === 1) {
            snakeHead.top += this.frame;
          } else {
            snakePiecesCopy.pop();

            if (!this.shouldRemoveTailFromPiecesArray(snakeTail)) {
              const newSnakeTail = this.resizeSnakeTail(snakeTail, -(this.frame));

              snakeHead.height += this.frame;

              snakePiecesCopy.push(newSnakeTail);
            }
          }
          break;
        case SnakeComponent.DIRECTIONS.left.value:
          if (snakePiecesLength === 1) {
            snakeHead.left -= this.frame;
          } else {
            snakePiecesCopy.pop();

            if (!this.shouldRemoveTailFromPiecesArray(snakeTail)) {
              const newSnakeTail = this.resizeSnakeTail(snakeTail, -(this.frame));

              snakeHead.width += this.frame;
              snakeHead.left -= this.frame;

              snakePiecesCopy.push(newSnakeTail);
            }
          }
          break;
        case SnakeComponent.DIRECTIONS.right.value:
          if (snakePiecesLength === 1) {
            snakeHead.left += this.frame;
          } else {
            snakePiecesCopy.pop();

            if (!this.shouldRemoveTailFromPiecesArray(snakeTail)) {
              const newSnakeTail = this.resizeSnakeTail(snakeTail, -(this.frame));

              snakeHead.width += this.frame;

              snakePiecesCopy.push(newSnakeTail);
            }
          }
          break;
      }

      if (this.collisionDetected(snakeHead)) {
        this.stop();
        return;
      }

      this.snakePieces = snakePiecesCopy;
    }, this.snakeSpeed);
  }

  public createNewSnakeHead(direction): any {
    const oldHead = this.snakePieces[0];
    let top = oldHead.top;
    let left = oldHead.left;

    if (oldHead.direction.value === SnakeComponent.DIRECTIONS.right.value) {
      left = left + (oldHead.width - this.frame);
    }
    if (oldHead.direction.value === SnakeComponent.DIRECTIONS.bottom.value) {
      top = top + (oldHead.height - this.frame);
    }

    const newSnakeHead = {
      width: this.snakeSize,
      height: this.snakeSize,
      top,
      left,
      direction,
    };

    return newSnakeHead;
  }

  public changeDirection(newDirectionKey: string): void {
    if (this.isValidMovement(newDirectionKey)) {
      const newDirection = SnakeComponent.DIRECTIONS[newDirectionKey];
      this.newDirectionsQueue.push(newDirection);
      this.increaseSnakeSize(this.frame);
    }
  }

  ngOnInit(): void {

  }
}
