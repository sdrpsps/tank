import config from '../../config';
import BulletModel from '../model/BulletModel';
import { BulletModelConstructor, ICanvas } from '../types';
import CanvasAbstract from './CanvasAbstract';
import PlayerCanvas from './PlayerCanvas';
import TankCanvas from './TankCanvas';

export default new (class BulletCanvas extends CanvasAbstract implements ICanvas {
  interval = 0;

  num(): number {
    return 0;
  }

  model(): BulletModelConstructor {
    return BulletModel;
  }

  render(): void {
    this.interval = setInterval(() => {
      this.createModels();
      this.renderModels();
    }, config.timeout);
  }

  stop() {
    clearInterval(this.interval);
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
