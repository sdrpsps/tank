import config from '../../config';
import CanvasAbstract from './CanvasAbstract';
import TankModel from '../model/TankModel';
import { ICanvas, ModelConstructor } from '../types';
import location from '../service/location';

export default new (class TankCanvas extends CanvasAbstract implements ICanvas {
  interval = 0;

  num(): number {
    return config.tank.num;
  }

  model(): ModelConstructor {
    return TankModel;
  }

  render(): void {
    this.createModels();
    this.renderModels();

    this.interval = setInterval(() => this.renderModels(), config.timeout);
  }

  stop() {
    clearInterval(this.interval);
  }

  // 渲染模型并画上画布
  renderModels() {
    this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
    this.models.forEach((model) => {
      model.render();
      this.ctx.drawImage(model.image(), model.x, model.y, config.model.width, config.model.height);
    });
  }

  createModels() {
    for (let i = 0; i < this.num(); i++) {
      const pos = location.position();
      const Model = this.model();
      const instance = new Model(pos.x, 0);
      this.models.push(instance);
    }
  }
})('tank');
