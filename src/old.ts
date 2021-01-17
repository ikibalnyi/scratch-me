import { Point } from 'graphics-ts/lib/Shape';

export const getPosition = (e: MouseEvent): Point => ({ x: e.offsetX, y: e.offsetY });

export function followPressedMouse(
  node: HTMLElement,
  onMove: (position: Point, prevPosition: Point | null) => void,
) {
  let mousePosition: null | Point = null;

  const setMousePosition = (e: MouseEvent): void => {
    mousePosition = getPosition(e);
  };

  const clearMousePosition = (): void => {
    mousePosition = null;
  };

  const handleMouseEnter = (e: MouseEvent): void => setMousePosition(e);
  const handleMouseLeave = clearMousePosition;
  const handleMouseMove = (e: MouseEvent): void => {
    onMove(getPosition(e), mousePosition);
    setMousePosition(e);
  };

  const handleMouseUp = () => {
    clearMousePosition();
    node.removeEventListener('mouseenter', handleMouseEnter);
    node.removeEventListener('mouseleave', handleMouseLeave);
    node.removeEventListener('mousemove', handleMouseMove);
    node.removeEventListener('mouseup', handleMouseUp);
  };

  node.addEventListener('mousedown', (e) => {
    setMousePosition(e);

    onMove(getPosition(e), null);

    node.addEventListener('mouseenter', handleMouseEnter);
    node.addEventListener('mousemove', handleMouseMove);
    node.addEventListener('mouseup', handleMouseUp);
    node.addEventListener('mouseleave', handleMouseLeave);
  });
}
