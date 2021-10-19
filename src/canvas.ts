import * as C from 'graphics-ts/lib/Canvas';
import * as Shape from 'graphics-ts/lib/Shape';
import * as Color from 'graphics-ts/lib/Color';
import * as D from 'graphics-ts/lib/Drawing';
import * as RIO from 'fp-ts-contrib/ReaderIO';
import * as IO from 'fp-ts/IO';
import * as RA from 'fp-ts/ReadonlyArray';
import { flow, pipe } from 'fp-ts/function';

import { getDevicePixelRatio } from './utils';

export const getCanvas: C.Render<HTMLCanvasElement> = (ctx) => () => ctx.canvas;

const setStyleDimensions = ({ width, height }: C.CanvasDimensions): C.Render<HTMLCanvasElement> =>
  flow(
    getCanvas,
    IO.map((cnv) => {
      cnv.style.width = `${width}px`;
      cnv.style.height = `${height}px`;
      return cnv;
    }),
  );

export const ctxGetDimensions: C.Render<C.CanvasDimensions> = flow(
  getCanvas,
  IO.chain(C.getDimensions),
);

export const ctxSetDimension = ({
  width,
  height,
}: C.CanvasDimensions): C.Render<HTMLCanvasElement> =>
  pipe(
    getCanvas,
    RIO.chainIOK((c) =>
      pipe(
        getDevicePixelRatio,
        IO.chain((pixelRation) =>
          C.setDimensions({ width: width * pixelRation, height: height * pixelRation })(c),
        ),
      ),
    ),
    RIO.chain(() => setStyleDimensions({ width, height })),
  );

export const line = (coords: Shape.Point, prevCoords: Shape.Point): Shape.Shape =>
  Shape.path(RA.Foldable)([
    Shape.point(prevCoords.x, prevCoords.y),
    Shape.point(coords.x, coords.y),
  ]);

export const fillBackground = (color: Color.Color): C.Render<D.Drawing> =>
  flow(
    ctxGetDimensions,
    IO.map(({ width, height }) => D.fill(Shape.rect(0, 0, width, height), D.fillStyle(color))),
  );
