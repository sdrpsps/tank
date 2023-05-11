import config from '../../config';
import PlayerModel from '../model/PlayerModel';
import { ICanvas, ModelConstructor } from '../types';
import CanvasAbstract from './CanvasAbstract';

export default new (class WaterCanvas extends CanvasAbstract implements ICanvas {
  num(): number {
    return 1;
  }

  model(): ModelConstructor {
    return PlayerModel;
  }

  render(): void {
    this.createPlayer();
    super.renderModels();
  }

  // 创建 BOSS 围墙
  createPlayer() {
    const cw = config.canvas.width;
    const ch = config.canvas.height;
    const mw = config.model.width;
    const mh = config.model.height;
    const pos = [{ x: cw / 2 + mw * 4, y: ch - mh }];
    pos.forEach((position) => {
      const Model = this.model() as ModelConstructor;
      const instance = new Model(position.x, position.y);
      this.models.push(instance);
    });
  }
})('player');
