import config from '../../config';
import CanvasAbstract from './CanvasAbstract';
import WallModel from '../model/WallModel';
import { ICanvas, ModelConstructor } from '../types';

export default new (class WallCanvas extends CanvasAbstract implements ICanvas {
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
})('wall');
