import config from '../../config';
import CanvasAbstract from './CanvasAbstract';
import SteelModel from '../model/SteelModel';

class SteelCanvas extends CanvasAbstract {
  constructor() {
    super();
    super.createModels(config.steel.num, SteelModel);
  }
  render(): void {
    super.renderModels();
  }
}

export default new SteelCanvas();
