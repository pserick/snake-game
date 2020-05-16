export enum Type {
  snake = 'snake',
  food = 'food',
  empty = '',
}

export enum Part {
  tail = 'tail',
  body = 'body',
  head = 'head',
  empty = '',
}

export enum Direction {
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right',
  empty = '',
}

export interface FilledBy {
  type: Type;
  part: Part;
  direction: Direction;
}

export interface Frame {
  left: number;
  top: number;
  isFullFilled: boolean;
  filledBy: FilledBy;
  index: [number, number];
}
