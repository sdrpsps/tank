import BulletModel from '../model/BulletModel';
import { ICanvas, ModelConstructor } from '../types';
import CanvasAbstract from './CanvasAbstract';

export default new (class BulletCanvas extends CanvasAbstract implements ICanvas {
  num(): number {
    return 0;
  }

  model(): ModelConstructor {
    return BulletModel;
  }

  render(): void {
    super.createModels();
    super.renderModels();
  }
})('bullet');
