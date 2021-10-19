import * as C from 'graphics-ts/lib/Canvas';

export const getDocumentDimensions = (): C.CanvasDimensions => ({
  width: document.body.clientWidth,
  height: document.body.clientHeight,
});

export const getDevicePixelRatio = (): number => window.devicePixelRatio || 1;
