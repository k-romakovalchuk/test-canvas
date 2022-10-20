import { Element } from '../types';
import { ctx } from '../App';

export const collapse = (argument: Element[]) => {
  const dir = -2;

  const speed = 0.2;
  let progress = 0;

  let lineInterval: NodeJS.Timeout;

  if (ctx) {
    ctx.globalCompositeOperation = 'copy';
  }

  drawLine();

  function drawLine() {
    lineInterval = setInterval(() => updateLine, 1);
  }

  function updateLine() {
    argument.forEach(item => {
      const { x, y } = centerLine(item);
      const length: number = lineLength({
        x1: x, y1: y, x2: item.x1, y2: item.y1,
      });

      defineLine(x, y, item);
      if (progress < length) {
        progress += speed;
        moveDash(progress, dir, length);
      } else {
        clearInterval(lineInterval);
      }
    });
  }

  function defineLine(x: number, y: number, item: Element) {
    if (ctx) {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(item.x1, item.y1);
      ctx.lineTo(x, y);
      ctx.moveTo(item.x1, item.y1);
      ctx.lineTo(x, y);
    }
  }

  function centerLine(item: Element) {
    const x = (item.x1 + item.x2) / 2;
    const y = (item.y1 + item.y2) / 2;

    return { x, y };
  }

  function lineLength(argument: Element) {
    if (argument.x2 - argument.x1 > 0) {
      return Math.sqrt((argument.x2 - argument.x1) ** 2 + (argument.y2 - argument.y1) ** 2);
    }

    return Math.sqrt((argument.x1 - argument.x2) ** 2 + (argument.y1 - argument.y2) ** 2);
  }

  function moveDash(frac: number, dir: number, length: number) {
    if (ctx) {
      ctx.setLineDash([length]);
      ctx.lineDashOffset = dir * (frac + length);
      ctx.stroke();
    }
  }
};
