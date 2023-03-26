import commandFactory from '../../js/factory/command';
import { commandNames } from '../../js/consts';
import { getCachedUndoDataForDimension } from '../../js/helper/selectionModifyHelper';

const command = {
  name: commandNames.CHANGE_SELECTION,

  execute(graphics, props) {
    if (this.isRedo) {
      props.forEach((prop) => {
        graphics.setObjectProperties(prop.id, prop);
      });
    } else {
      this.undoData = getCachedUndoDataForDimension();
    }

    return Promise.resolve();
  },

  undo(graphics) {
    this.undoData.forEach((datum) => {
      graphics.setObjectProperties(datum.id, datum);
    });

    return Promise.resolve();
  },
};

commandFactory.register(command);

export default command;
