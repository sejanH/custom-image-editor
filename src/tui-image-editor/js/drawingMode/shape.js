import DrawingMode from '../../js/interface/drawingMode';
import { drawingModes, componentNames as components } from '../../js/consts';

/**
 * ShapeDrawingMode class
 * @class
 * @ignore
 */
class ShapeDrawingMode extends DrawingMode {
  constructor() {
    super(drawingModes.SHAPE);
  }

  /**
   * start this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @override
   */
  start(graphics) {
    const shape = graphics.getComponent(components.SHAPE);
    shape.start();
  }

  /**
   * stop this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @override
   */
  end(graphics) {
    const shape = graphics.getComponent(components.SHAPE);
    shape.end();
  }
}

export default ShapeDrawingMode;
