import config from '../../config';
import CanvasAbstract from './CanvasAbstract';
import WaterModel from '../model/WaterModel';

class WaterCanvas extends CanvasAbstract {
  constructor() {
    super();
    super.createModels(config.water.num, WaterModel);
  }
  render(): void {
    super.renderModels();
  }
}

export default new WaterCanvas();
