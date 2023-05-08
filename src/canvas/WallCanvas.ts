import config from '../../config';
import CanvasAbstract from './CanvasAbstract';
import WallModel from '../model/WallModel';
import { ModelConstructor } from '../types';

class WallCanvas extends CanvasAbstract {
  num(): number {
    return config.wall.num;
  }

  model(): ModelConstructor {
    return WallModel;
  }

  render(): void {
    super.createModels();
    super.renderModels();
  }
}

export default new WallCanvas();
