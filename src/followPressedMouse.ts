import * as RIO from 'fp-ts-contrib/ReaderIO';
import * as O from 'fp-ts/Option';
import * as boolean from 'fp-ts/boolean';
import { pipe } from 'fp-ts/function';
import * as C from 'graphics-ts/lib/Canvas';
import * as Shape from 'graphics-ts/lib/Shape';

export const getPosition = (e: MouseEvent): Shape.Point => ({ x: e.offsetX, y: e.offsetY });

export const bind: <K extends keyof HTMLElementEventMap>(
  type: K,
  f: (e: HTMLElementEventMap[K]) => void,
) => C.Render<CanvasRenderingContext2D> = (t, f) => (c) => () => {
  c.canvas.addEventListener(t, f);
  return c;
};

export const bindWithContext =
  <K extends keyof HTMLElementEventMap, A>(
    type: K,
    f: (e: HTMLElementEventMap[K]) => C.Render<A>,
  ): C.Render<CanvasRenderingContext2D> =>
  (ctx) =>
  () => {
    ctx.canvas.addEventListener(type, (e) => f(e)(ctx)());
    return ctx;
  };

export const unbind: <K extends keyof HTMLElementEventMap>(
  type: K,
  f: (e: HTMLElementEventMap[K]) => void,
) => C.Render<CanvasRenderingContext2D> = (t, f) => (c) => () => {
  c.canvas.removeEventListener(t, f);
  return c;
};

export const followMouseMove = (
  shouldBePressed: boolean,
  onMove: (
    position: Shape.Point,
    prevPosition: O.Option<Shape.Point>,
  ) => C.Render<CanvasRenderingContext2D>,
): C.Render<CanvasRenderingContext2D> => {
  let isPressed = false;
  let mousePosition: O.Option<Shape.Point> = O.none;

  const setMousePosition = (e: MouseEvent): void => {
    mousePosition = O.some(getPosition(e));
  };

  const clearMousePosition = (): void => {
    mousePosition = O.none;
  };

  const setPressed = (e: MouseEvent): void => {
    setMousePosition(e);
    isPressed = true;
  };

  const setUnpressed = (): void => {
    clearMousePosition();
    isPressed = false;
  };

  const handleMouseEnter = (e: MouseEvent): void => {
    isPressed && setMousePosition(e);
  };
  const handleMouseLeave = (): void => {
    isPressed && clearMousePosition();
  };
  const handleMouseMove = (e: MouseEvent): C.Render<CanvasRenderingContext2D> =>
    shouldBePressed && !isPressed
      ? RIO.ask<CanvasRenderingContext2D>()
      : pipe(
          onMove(getPosition(e), mousePosition),
          RIO.map((ctx) => {
            setMousePosition(e);
            return ctx;
          }),
        );

  const handleMouseDown = (e: MouseEvent): C.Render<CanvasRenderingContext2D> =>
    pipe(
      onMove(getPosition(e), O.none),
      RIO.map((ctx) => {
        setPressed(e);
        return ctx;
      }),
    );

  const handleMouseUp = (): void => setUnpressed();

  return pipe(
    C.bindWithContext('mousedown', handleMouseDown),
    RIO.chain(() => bind('mouseenter', handleMouseEnter)),
    RIO.chain(() => bind('mouseleave', handleMouseLeave)),
    RIO.chain(() => bind('mouseup', handleMouseUp)),
    RIO.chain(() => bindWithContext('mousemove', handleMouseMove)),
  );
};
