import { Point2D } from '../types';

export function intersection(from1: Point2D, to1: Point2D, from2: Point2D, to2: Point2D): Point2D | null {
  const dX: number = to1.x - from1.x;
  const dY: number = to1.y - from1.y;

  const determinant: number = dX * (to2.y - from2.y) - (to2.x - from2.x) * dY;

  if (determinant === 0) {
    return null;
  }

  const lambda: number = ((to2.y - from2.y) * (to2.x - from1.x) + (from2.x - to2.x) * (to2.y - from1.y)) / determinant;
  const gamma: number = ((from1.y - to1.y) * (to2.x - from1.x) + dX * (to2.y - from1.y)) / determinant;

  if (!(lambda >= 0 && lambda <= 1) || !(gamma >= 0 && gamma <= 1)) {
    return null;
  }

  return {
    x: from1.x + lambda * dX,
    y: from1.y + lambda * dY,
  };
}
