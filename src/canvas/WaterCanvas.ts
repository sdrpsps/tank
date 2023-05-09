import config from '../../config';
import CanvasAbstract from './CanvasAbstract';
import WaterModel from '../model/WaterModel';
import { ICanvas, ModelConstructor } from '../types';

export default new (class WaterCanvas extends CanvasAbstract implements ICanvas {
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
})('water');
