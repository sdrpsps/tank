import config from '../../config';
import BulletModel from '../model/BulletModel';
import { BulletModelConstructor, ICanvas } from '../types';
import CanvasAbstract from './CanvasAbstract';
import PlayerCanvas from './PlayerCanvas';
import TankCanvas from './TankCanvas';

export default new (class BulletCanvas extends CanvasAbstract implements ICanvas {
  num(): number {
    return 0;
  }

  model(): BulletModelConstructor {
    return BulletModel;
  }

  render(): void {
    setInterval(() => {
      this.createModels();
      this.renderModels();
    }, config.timeout);
  }

  createModels(): void {
    TankCanvas.models.forEach((tank) => {
      const isExist = this.models.some((m) => m.tank === tank);
      if (!isExist) {
        this.models.push(new BulletModel(tank));
      }
    });
  }

  createPlayerModels() {
    this.models.push(new BulletModel(PlayerCanvas.models[0]));
  }
})('bullet');
