import config from '../../config';
import BossModel from '../model/BossModel';
import { ICanvas, ModelConstructor } from '../types';
import CanvasAbstract from './CanvasAbstract';

export default new (class WaterCanvas extends CanvasAbstract implements ICanvas {
  num(): number {
    return 0;
  }

  model(): ModelConstructor {
    return BossModel;
  }

  render(): void {
    this.createModels();
    super.renderModels();
  }

  createModels() {
    [{ x: config.canvas.width / 2, y: config.canvas.height - config.model.height }].forEach((position) => {
      const Model = this.model() as ModelConstructor;
      const instance = new Model(position.x, position.y);
      this.models.push(instance);
    });
  }
})('boss');
