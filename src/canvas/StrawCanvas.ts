import config from '../../config';
import CanvasAbstract from './CanvasAbstract';
import StrawModel from '../model/StrawModel';
import { ModelConstructor } from '../types';

class StrawCanvas extends CanvasAbstract {
  num(): number {
    return config.straw.num;
  }

  model(): ModelConstructor {
    return StrawModel;
  }

  render(): void {
    super.createModels();
    super.renderModels();
  }
}

export default new StrawCanvas();
