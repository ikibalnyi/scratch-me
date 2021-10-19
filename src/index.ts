import * as C from 'graphics-ts/lib/Canvas';
import * as D from 'graphics-ts/lib/Drawing';
import * as Shape from 'graphics-ts/lib/Shape';
import * as Color from 'graphics-ts/lib/Color';
import * as apply from 'fp-ts/Apply';
import * as O from 'fp-ts/Option';
import * as RA from 'fp-ts/ReadonlyArray';
import * as R from 'fp-ts/Reader';
import * as RIO from 'fp-ts-contrib/ReaderIO';
import { error } from 'fp-ts/Console';
import { pipe } from 'fp-ts/function';

import { followPressedMouse } from './followPressedMouse';
import { ctxSetDimension, fillBackground, line } from './canvas';
import { drawText } from './text';
import { getDevicePixelRatio, getDocumentDimensions } from './utils';

const CANVAS_ID = 'canvas';

const ERASE_MODE = 'destination-out';
const DEFAULT_MODE = 'source-over';
const BACKGROUND_MODE = 'destination-over';

const ERASE_RADIUS = 10;

const screen: C.Render<D.Drawing> = pipe(
  apply.sequenceT(RIO.readerIO)(fillBackground(Color.white), drawText('SCRATCH ME')),
  RIO.map(D.many),
);

const background: C.Render<D.Drawing> = pipe(
  apply.sequenceT(RIO.readerIO)(drawText('LOOK BETTER'), fillBackground(Color.white)),
  RIO.map(D.many),
);

const erase = (radius: number) => (
  coords: Shape.Point,
  prevCoords: O.Option<Shape.Point>,
): C.Render<CanvasRenderingContext2D> =>
  C.withContext(
    pipe(
      RA.sequence(RIO.Applicative)([
        C.setGlobalCompositeOperation(ERASE_MODE),
        C.setLineWidth(radius * 2),
        C.setLineCap('round'),
        C.setLineJoin('round'),
        pipe(
          prevCoords,
          O.fold(
            () => RIO.ask<CanvasRenderingContext2D>(),
            (prevCoords) => pipe(line(coords, prevCoords), D.renderShape, C.strokePath),
          ),
        ),
      ]),
      RIO.chain(() =>
        pipe(Shape.circle(coords.x, coords.y, ERASE_RADIUS), D.renderShape, C.fillPath),
      ),
    ),
  );

const initCanvas: C.Render<CanvasRenderingContext2D> = pipe(
  RIO.ask<CanvasRenderingContext2D>(),
  RIO.chainFirst(() =>
    pipe(
      R.of(getDocumentDimensions),
      RIO.chain(ctxSetDimension),
      RIO.chain(() =>
        pipe(
          R.of(getDevicePixelRatio),
          RIO.chain((dpi) => C.scale(dpi, dpi)),
        ),
      ),
    ),
  ),
  RIO.chainFirst(() => RIO.chain(D.render)(screen)),
  RIO.chain(() =>
    followPressedMouse((coords, prevCoords) =>
      pipe(
        erase(ERASE_RADIUS)(coords, prevCoords),
        RIO.chain(() => C.setGlobalCompositeOperation(BACKGROUND_MODE)),
        RIO.chainFirst(() => RIO.chain(D.render)(background)),
      ),
    ),
  ),
);

const init = (): void => {
  C.renderTo(CANVAS_ID, () => error(`[ERROR]: Unable to find canvas with id ${CANVAS_ID}`))(
    initCanvas,
  )();
};

init();
