import { Coords } from '../types';

export * from 'graphics-ts/lib/Canvas';

export type Screen = Readonly<{
  node: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  dpi: number;
}>;

export const of = (node: HTMLCanvasElement): Screen => {
  return {
    node,
    ctx: node.getContext('2d') as CanvasRenderingContext2D,
    dpi: window.devicePixelRatio,
  };
};

export const enableErase = (canvas: Screen) => {
  canvas.ctx.globalCompositeOperation = 'destination-out';
  return canvas;
};

export const disableErase = (canvas: Screen) => {
  canvas.ctx.globalCompositeOperation = 'source-over';
  return canvas;
};

export const fillBackground = (color: string) => (canvas: Screen) => {
  canvas.ctx.fillStyle = color;
  canvas.ctx.fillRect(0, 0, canvas.node.width, canvas.node.height);
  return canvas;
};

export const drawText = (
  text: string,
  { color = '#000', fontSize = 30, fontFamily = 'Helvetica' } = {},
) => (canvas: Screen) => {
  canvas.ctx.fillStyle = color;
  canvas.ctx.font = `${fontSize}px ${fontFamily}`;
  const { width: textWidth } = canvas.ctx.measureText(text);
  const x = canvas.node.width / 2 - textWidth / 2;
  const y = canvas.node.height / 2 - fontSize / 2;
  canvas.ctx.fillText(text, x, y);

  return canvas;
};

export const drawArc = (coords: Coords, radius: number, startAngle = 0, endAngle = 2 * Math.PI) => (
  canvas: Screen,
) => {
  const { dpi, ctx } = canvas;

  ctx.beginPath();
  ctx.arc(coords.x, coords.y, radius, startAngle, endAngle);
  ctx.fill();

  return canvas;
};

export const drawLine = (from: Coords, to: Coords, width: number) => (canvas: Screen) => {
  const { dpi, ctx } = canvas;

  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.stroke();

  return canvas;
};

export const init = (screen: Screen): Screen => {
  console.log(123);
  const width = document.body.clientWidth;
  const height = document.body.clientHeight;
  screen.node.height = height * screen.dpi;
  screen.node.width = width * screen.dpi;
  screen.node.style.width = `${width}px`;
  screen.node.style.height = `${height}px`;
  screen.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

  return screen;
};
