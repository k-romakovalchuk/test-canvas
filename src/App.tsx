import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { intersection } from './helpers/Intersection';
import { Point2D, Element } from './types';

export let ctx: CanvasRenderingContext2D | null = null;

export const App: React.FC = () => {
  const [drawingState, setDrawingState] = useState(true);
  const [elements, setElements] = useState<Element[]>([]);
  const [intersectionState, setIntersectionState] = useState<Point2D[]>([]);
  const [intersectionState2, setIntersectionState2] = useState<Point2D[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [buttonclick, setButtonClick] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    setDrawingState(prev => !prev);

    if (drawingState) {
      const { clientX, clientY } = event;

      setElements(prev => [...prev, {
        x1: clientX, y1: clientY, x2: clientX, y2: clientY,
      }]);

      setIsDrawing(true);
    } else {
      setIntersectionState2(prev => [...prev, ...intersectionState]);
      setIsDrawing(false);
    }
  };

  const draw = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (isDrawing) {
      const { clientX, clientY } = event;

      const index = elements.length - 1;
      const { x1: x1_, y1: y1_ } = elements[index];

      if (elements.length !== 0 && elements[0] !== undefined) {
        const mass: Point2D[] = [];

        elements.forEach(({
          x1, y1, x2, y2,
        }) => {
          if (x1_ !== x1) {
            const intersectionPoint = intersection({ x: x1_, y: y1_ }, { x: clientX, y: clientY }, { x: x1, y: y1 }, { x: x2, y: y2 });

            if (intersectionPoint) {
              if (ctx) {
                ctx.beginPath();
                ctx.arc(intersectionPoint.x, intersectionPoint.y, 5, 0, Math.PI * 2, true);
                ctx.fill();
              }

              mass.push({ x: intersectionPoint.x, y: intersectionPoint.y });
            }
          }
        });
        setIntersectionState(mass);
      }

      const elementsCopy = [...elements];

      elementsCopy[index] = {
        x1: x1_, y1: y1_, x2: clientX, y2: clientY,
      };
      setElements(elementsCopy);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      ctx = canvas.getContext('2d');
      if (!buttonclick) {
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    // if (buttonclick) {
    //   collapse(elements)

    //   setButtonClick(false)
    //   setElements([])
    // }
    if (elements.length !== 0 && elements[0] !== undefined) {
      elements.forEach(({
        x1, y1, x2, y2,
      }) => {
        if (ctx) {
          ctx.beginPath();
          ctx.lineWidth = 3;
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      });

      intersectionState.forEach((item) => {
        if (ctx) {
          ctx.strokeStyle = 'black';
          ctx.beginPath();
          ctx.fillStyle = 'red';
          ctx.arc(item.x, item.y, 5, 0, Math.PI * 2, true);
          ctx.fill('evenodd');
        }
      });

      intersectionState2.forEach((item) => {
        if (ctx) {
          ctx.strokeStyle = 'black';
          ctx.beginPath();
          ctx.fillStyle = 'red';
          ctx.arc(item.x, item.y, 5, 0, Math.PI * 2, true);
          ctx.fill('evenodd');
        }
      });
    }
  }, [elements, buttonclick]);

  return (
    <>
      <canvas
        style={{ border: '1px solid red' }}
        width="800px"
        height="500px"
        onClick={startDrawing}
        onContextMenu={(e) => {
          e.preventDefault();
          if (!drawingState) {
            elements.pop();

            setElements(prev => [...prev]);
            setIntersectionState([]);

            if (elements[0] === undefined) {
              setElements([]);
            }

            setIsDrawing(false);
            setDrawingState(prev => !prev);
          }
        }}
        onMouseMove={draw}
        ref={canvasRef}
      >
      </canvas>
      <button onClick={() => setButtonClick(true)}>Collapse lines</button>
    </>
  );
};
