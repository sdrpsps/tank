import config from '../../config';
import CanvasAbstract from './CanvasAbstract';
import WaterModel from '../model/WaterModel';
import { ModelConstructor } from '../types';

class WaterCanvas extends CanvasAbstract {
  num(): number {
    return config.water.num;
  }

  model(): ModelConstructor {
    return WaterModel;
  }

  render(): void {
    super.createModels();
    super.renderModels();
  }
}

export default new WaterCanvas();
