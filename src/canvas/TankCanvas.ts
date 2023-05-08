import config from '../../config';
import CanvasAbstract from './CanvasAbstract';
import TankModel from '../model/TankModel';
import { ICanvas, ModelConstructor } from '../types';
import location from '../service/location';

class TankCanvas extends CanvasAbstract implements ICanvas {
  num(): number {
    return config.tank.num;
  }

  model(): ModelConstructor {
    return TankModel;
  }

  render(): void {
    this.createModels();
    super.renderModels();
  }

  createModels() {
    for (let i = 0; i < this.num(); i++) {
      const pos = location.position();
      const Model = this.model();
      const instance = new Model(this.canvas, pos.x, 0);
      this.models.push(instance);
    }
  }
}

export default new TankCanvas();
