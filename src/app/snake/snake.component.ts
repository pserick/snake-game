import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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

  private snakeSpeed = 10;
  private direction = SnakeComponent.DIRECTIONS.right;
  private snakeHeight = 8;
  private intervalId: number;

  public snakePieces = [
    {
      width: 50,
      height: this.snakeHeight,
      top: 150,
      left: 50,
      direction: this.direction,
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
    const allowedMovements = this.direction.allowedMovements;

    return newDirection && allowedMovements.includes(newDirection.value);
  }

  private isHorizontalMovement(direction: string): boolean {
    return direction === SnakeComponent.DIRECTIONS.right.value ||
      direction === SnakeComponent.DIRECTIONS.left.value;
  }

  private shouldRemoveTailFromPiecesArray(snakeTail): boolean {
    const tailDirection = snakeTail.direction.value;

    return this.isHorizontalMovement(tailDirection) ?
      (snakeTail.width === this.snakeHeight) :
      (snakeTail.height === this.snakeHeight);
  }

  private collisionDetected(snakeHead): boolean {
    const { offsetWidth, offsetHeight } = document.getElementById('field');
    const { left, top, width, height } = snakeHead;

    const headTouchablePoints = Array(this.snakeHeight).fill('').map((_, index) => {
      if (snakeHead.direction.value === SnakeComponent.DIRECTIONS.right.value) {
        return { left: (left + width), top: top + (index + 1) };
      }
      if (snakeHead.direction.value === SnakeComponent.DIRECTIONS.left.value) {
        return { left, top: top + (index + 1) };
      }
      if (snakeHead.direction.value === SnakeComponent.DIRECTIONS.top.value) {
        return { left: left + (index + 1), top };
      }
      if (snakeHead.direction.value === SnakeComponent.DIRECTIONS.bottom.value) {
        return { left: left + (index + 1), top: (top + height) };
      }
      return { left, top };
    });

    const borderCollision = headTouchablePoints.some((point) => {
      return (point.left === 0 || point.top === 0 || point.left === offsetWidth || point.top === offsetHeight);
    });

    if (borderCollision) {
      return true;
    }

    const snakeCollision = headTouchablePoints.some((point) => {
      return this.snakePieces.some((piece, index) => {
        if (index < 3) {
          return false;
        }

        const snakePieceTouchablePoints = [];
        const snakePieceSize = this.isHorizontalMovement(piece.direction.value) ? piece.width : piece.height;

        Array(this.snakeHeight).fill('').forEach((__, index1) => {
          Array(snakePieceSize).fill('').forEach((_, index2) => {
            if (piece.direction.value === SnakeComponent.DIRECTIONS.right.value) {
              snakePieceTouchablePoints.push({ left: (piece.left + piece.width) - index2, top: piece.top + index1 });
            }
            if (piece.direction.value === SnakeComponent.DIRECTIONS.left.value) {
              snakePieceTouchablePoints.push({ left: piece.left + index2, top: piece.top + index1 });
            }
            if (piece.direction.value === SnakeComponent.DIRECTIONS.top.value) {
              snakePieceTouchablePoints.push({ left: piece.left + index1, top: piece.top + index2 });
            }
            if (piece.direction.value === SnakeComponent.DIRECTIONS.bottom.value) {
              snakePieceTouchablePoints.push({ left: piece.left + index1, top: (piece.top + piece.height) - index2 });
            }
          });
        });

        const hasCollision = snakePieceTouchablePoints.some(tp => tp.left === point.left && tp.top === point.top);

        return hasCollision;
      });
    });

    if (snakeCollision) {
      return true;
    }

    return false;
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
      const snakePiecesLength = snakePiecesCopy.length;
      const snakeHead = snakePiecesCopy[0];
      const snakeTail = snakePiecesLength > 1 ? snakePiecesCopy[snakePiecesLength - 1] : null;
      switch (this.direction.value) {
        case SnakeComponent.DIRECTIONS.top.value:
          if (snakePiecesLength === 1) {
            snakeHead.top -= 1;
          } else {
            snakePiecesCopy.pop();

            if (!this.shouldRemoveTailFromPiecesArray(snakeTail)) {
              const newSnakeTail = this.resizeSnakeTail(snakeTail, -1);

              snakeHead.height += 1;
              snakeHead.top -= 1;

              snakePiecesCopy.push(newSnakeTail);
            }
          }
          break;
        case SnakeComponent.DIRECTIONS.bottom.value:
          if (snakePiecesLength === 1) {
            snakeHead.top += 1;
          } else {
            snakePiecesCopy.pop();

            if (!this.shouldRemoveTailFromPiecesArray(snakeTail)) {
              const newSnakeTail = this.resizeSnakeTail(snakeTail, -1);

              snakeHead.height += 1;

              snakePiecesCopy.push(newSnakeTail);
            }
          }
          break;
        case SnakeComponent.DIRECTIONS.left.value:
          if (snakePiecesLength === 1) {
            snakeHead.left -= 1;
          } else {
            snakePiecesCopy.pop();

            if (!this.shouldRemoveTailFromPiecesArray(snakeTail)) {
              const newSnakeTail = this.resizeSnakeTail(snakeTail, -1);

              snakeHead.width += 1;
              snakeHead.left -= 1;

              snakePiecesCopy.push(newSnakeTail);
            }
          }
          break;
        case SnakeComponent.DIRECTIONS.right.value:
          if (snakePiecesLength === 1) {
            snakeHead.left += 1;
          } else {
            snakePiecesCopy.pop();

            if (!this.shouldRemoveTailFromPiecesArray(snakeTail)) {
              const newSnakeTail = this.resizeSnakeTail(snakeTail, -1);

              snakeHead.width += 1;

              snakePiecesCopy.push(newSnakeTail);
            }
          }
          break;
      }

      if (this.collisionDetected(snakeHead) === true) {
        this.stop();
        return;
      }

      this.snakePieces = snakePiecesCopy;
    }, this.snakeSpeed);
  }

  public changeDirection(newDirectionKey: string): void {
    if (this.isValidMovement(newDirectionKey)) {
      const snakePiecesCopy = [...this.snakePieces];
      const newDirection = SnakeComponent.DIRECTIONS[newDirectionKey];

      let top = this.snakePieces[0].top;
      let left = this.snakePieces[0].left;

      if (this.direction.value === SnakeComponent.DIRECTIONS.right.value) {
        left = left + (this.snakePieces[0].width - this.snakeHeight);
      }
      if (this.direction.value === SnakeComponent.DIRECTIONS.bottom.value) {
        top = top + (this.snakePieces[0].height - this.snakeHeight);
      }

      const newSnakeHead = {
        width: this.snakeHeight,
        height: this.snakeHeight,
        top,
        left,
        direction: newDirection,
      };

      snakePiecesCopy.unshift(newSnakeHead);

      this.direction = newDirection;
      this.snakePieces = snakePiecesCopy;

      this.increaseSnakeSize(10);
    }
  }

  ngOnInit(): void {

  }
}
