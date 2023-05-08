import config from '../../config';
import CanvasAbstract from './CanvasAbstract';
import SteelModel from '../model/SteelModel';
import { ModelConstructor } from '../types';

class SteelCanvas extends CanvasAbstract {
  num(): number {
    return config.steel.num;
  }

  model(): ModelConstructor {
    return SteelModel;
  }

  render(): void {
    super.createModels();
    super.renderModels();
  }
}

export default new SteelCanvas();
