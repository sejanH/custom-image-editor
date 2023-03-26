import DrawingMode from '../../js/interface/drawingMode';
import { drawingModes, componentNames as components } from '../../js/consts';

/**
 * ZoomDrawingMode class
 * @class
 * @ignore
 */
class ZoomDrawingMode extends DrawingMode {
  constructor() {
    super(drawingModes.ZOOM);
  }

  /**
   * start this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @override
   */
  start(graphics) {
    const zoom = graphics.getComponent(components.ZOOM);

    zoom.start();
  }

  /**
   * stop this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @override
   */
  end(graphics) {
    const zoom = graphics.getComponent(components.ZOOM);

    zoom.end();
  }
}

export default ZoomDrawingMode;
