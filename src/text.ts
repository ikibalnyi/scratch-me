import * as C from 'graphics-ts/lib/Canvas';
import * as D from 'graphics-ts/lib/Drawing';
import * as Color from 'graphics-ts/lib/Color';
import * as Font from 'graphics-ts/lib/Font';
import * as R from 'fp-ts/Reader';
import * as RIO from 'fp-ts-contrib/ReaderIO';
import { pipe } from 'fp-ts/function';

import { getDocumentDimensions } from './utils';

export const measureText = (text: D.Text): C.Render<C.TextMetrics> =>
  C.withContext(
    pipe(
      C.setFont(Font.showFont.show(text.font)),
      RIO.chain(() => C.measureText(text.text)),
    ),
  );

export const centerText = (text: D.Text): C.Render<D.Drawing> =>
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

export const drawText = (text: string, color: Color.Color = Color.black): C.Render<D.Drawing> =>
  centerText(D.text(Font.font('Helvetica', 30), 0, 0, D.fillStyle(color), text) as D.Text);
