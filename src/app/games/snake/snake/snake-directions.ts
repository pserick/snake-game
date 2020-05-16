import { Direction } from '../service/data/frame.interface';

enum KeyPressMovement {
  up = 'ArrowUp',
  down = 'ArrowDown',
  left = 'ArrowLeft',
  right = 'ArrowRight',
}

export interface SnakeDirection {
  direction: Direction;
  keyPressValue: KeyPressMovement;
  allowedMovements: Direction[];
}

export class SnakeDirections {
  private static directions: SnakeDirection[] =     [
    {
      direction: Direction.up,
      keyPressValue: KeyPressMovement.up,
      allowedMovements: [Direction.left, Direction.right],
    },
    {
      direction: Direction.down,
      keyPressValue: KeyPressMovement.down,
      allowedMovements: [Direction.left, Direction.right],
    },
    {
      direction: Direction.left,
      keyPressValue: KeyPressMovement.left,
      allowedMovements: [Direction.up, Direction.down],
    },
    {
      direction: Direction.right,
      keyPressValue: KeyPressMovement.right,
      allowedMovements: [Direction.up, Direction.down],
    },
  ];

  public static getSnakeDirectionByDirection(direction: Direction): SnakeDirection {
    return this.directions.find(d => d.direction === direction);
  }

  public static getSnakeDirectionByKeyPressValue(keyPressValue: string): SnakeDirection {
    return this.directions.find(d => d.keyPressValue === keyPressValue);
  }
}
