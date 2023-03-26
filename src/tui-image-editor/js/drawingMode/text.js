import DrawingMode from '../../js/interface/drawingMode';
import { drawingModes, componentNames as components } from '../../js/consts';

/**
 * TextDrawingMode class
 * @class
 * @ignore
 */
class TextDrawingMode extends DrawingMode {
  constructor() {
    super(drawingModes.TEXT);
  }

  /**
   * start this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @override
   */
  start(graphics) {
    const text = graphics.getComponent(components.TEXT);
    text.start();
  }

  /**
   * stop this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @override
   */
  end(graphics) {
    const text = graphics.getComponent(components.TEXT);
    text.end();
  }
}

export default TextDrawingMode;
