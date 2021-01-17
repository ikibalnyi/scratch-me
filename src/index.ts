import * as C from 'graphics-ts/lib/Canvas';
import * as D from 'graphics-ts/lib/Drawing';
import * as Shape from 'graphics-ts/lib/Shape';
import * as Color from 'graphics-ts/lib/Color';
import * as Font from 'graphics-ts/lib/Font';
import * as IO from 'fp-ts/IO';
import * as O from 'fp-ts/Option';
import * as R from 'fp-ts/Reader';
import * as RA from 'fp-ts/ReadonlyArray';
import * as RIO from 'fp-ts-contrib/ReaderIO';
import { error } from 'fp-ts/Console';
import { flow, pipe } from 'fp-ts/function';

import { followPressedMouse } from './followPressedMouse';

const CANVAS_ID = 'canvas';

const ERASE_MODE = 'destination-out';
const DEFAULT_MODE = 'source-over';
const BACKGROUND_MODE = 'destination-over';

const ERASE_RADIUS = 10;

const getDocumentDimensions = (): C.CanvasDimensions => ({
  width: document.body.clientWidth,
  height: document.body.clientHeight,
});
const getDevicePixelRatio = (): number => window.devicePixelRatio || 1;

const getCanvas: C.Render<HTMLCanvasElement> = (ctx) => () => ctx.canvas;
const setStyleDimensions = ({ width, height }: C.CanvasDimensions): C.Render<HTMLCanvasElement> =>
  flow(
    getCanvas,
    IO.map((cnv) => {
      cnv.style.width = `${width}px`;
      cnv.style.height = `${height}px`;
      return cnv;
    }),
  );

const ctxGetDimensions: C.Render<C.CanvasDimensions> = flow(getCanvas, IO.chain(C.getDimensions));
const ctxSetDimension = ({ width, height }: C.CanvasDimensions): C.Render<HTMLCanvasElement> =>
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

const fillBackground = (fillStyle: D.FillStyle): C.Render<D.Drawing> =>
  flow(
    ctxGetDimensions,
    IO.map(({ width, height }) => D.fill(Shape.rect(0, 0, width, height), fillStyle)),
  );

const measureText = (text: D.Text): C.Render<C.TextMetrics> =>
  C.withContext(
    pipe(
      C.setFont(Font.showFont.show(text.font)),
      RIO.chain(() => C.measureText(text.text)),
    ),
  );

const centerText = (text: D.Text): C.Render<D.Drawing> =>
  pipe(
    RIO.of(({ width, height }: C.CanvasDimensions) => ({ width: textWidth }: C.TextMetrics) =>
      D.translate(
        width / 2 - textWidth / 2 - text.x,
        height / 2 - text.font.size / 2 - text.y,
        text,
      ),
    ),
    RIO.ap(R.of(getDocumentDimensions)),
    RIO.ap(measureText(text)),
  );

const screen: C.Render<D.Drawing> = pipe(
  fillBackground(D.fillStyle(Color.black)),
  RIO.chain((bg) =>
    pipe(
      centerText(
        D.text(Font.font('Helvetica', 30), 0, 0, D.fillStyle(Color.white), 'SCRATCH ME') as D.Text,
      ),
      RIO.map((text) => D.many([bg, text])),
    ),
  ),
);

const background: C.Render<D.Drawing> = pipe(
  centerText(
    D.text(Font.font('Helvetica', 30), 0, 0, D.fillStyle(Color.black), 'LOOK BETTER') as D.Text,
  ),
);

const line = (coords: Shape.Point, prevCoords: Shape.Point): Shape.Shape =>
  Shape.path(RA.readonlyArray)([
    Shape.point(prevCoords.x, prevCoords.y),
    Shape.point(coords.x, coords.y),
  ]);

const erase = (
  coords: Shape.Point,
  prevCoords: O.Option<Shape.Point>,
): C.Render<CanvasRenderingContext2D> =>
  C.withContext(
    pipe(
      C.setGlobalCompositeOperation(ERASE_MODE),
      RIO.chain(() => C.setLineWidth(ERASE_RADIUS * 2)),
      RIO.chain(() => C.setLineCap('round')),
      RIO.chain(() => C.setLineJoin('round')),
      RIO.chain(() =>
        pipe(
          prevCoords,
          O.fold(
            () => RIO.ask<CanvasRenderingContext2D>(),
            (prevCoords) => C.strokePath(D.renderShape(line(coords, prevCoords))),
          ),
        ),
      ),
      RIO.chain(() => C.fillPath(D.renderShape(Shape.circle(coords.x, coords.y, ERASE_RADIUS)))),
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
        erase(coords, prevCoords),
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
