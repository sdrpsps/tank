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
    this.createBossWall();
    super.renderModels();
  }

  // 创建 BOSS 围墙
  createBossWall() {
    const cw = config.canvas.width;
    const ch = config.canvas.height;
    const mw = config.model.width;
    const mh = config.model.height;
    const pos = [
      { x: cw / 2 - mw * 2, y: ch - mh },
      { x: cw / 2 - mw * 2, y: ch - mh * 2 },
      { x: cw / 2 - mw * 2, y: ch - mh * 3 },
      { x: cw / 2 - mw, y: ch - mh * 3 },
      { x: cw / 2, y: ch - mh * 3 },
      { x: cw / 2 + mw, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 2 },
      { x: cw / 2 + mw * 2, y: ch - mh },
    ];
    pos.forEach((position) => {
      const Model = this.model() as ModelConstructor;
      const instance = new Model(position.x, position.y);
      this.models.push(instance);
    });
  }
})('wall');
