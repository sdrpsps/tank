import config from '../../config';
import SteelCanvas from '../canvas/SteelCanvas';
import WallCanvas from '../canvas/WallCanvas';
import WaterCanvas from '../canvas/WaterCanvas';
import { tankDirection } from '../enum/tankDirection';
import { images } from '../service/images';
import { IModel } from '../types';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract implements IModel {
  name = 'tank';

  render(): void {
    this.move();
  }

  // 坦克移动
  move() {
    while (true) {
      let x = this.x;
      let y = this.y;
      switch (this.direction) {
        case tankDirection.top:
          y--;
          break;
        case tankDirection.right:
          x++;
          break;
        case tankDirection.bottom:
          y++;
          break;
        case tankDirection.left:
          x--;
          break;
        default:
          break;
      }
      if (this.isTouch(x, y)) {
        this.randomDirection();
      } else {
        this.x = x;
        this.y = y;
        break;
      }
    }
    super.draw();
  }

  // 碰撞检测
  isTouch(x: number, y: number) {
    if (x < 0 || x + this.width > config.canvas.width || y < 0 || y + this.height > config.canvas.height) {
      return true;
    }
    const models = [...WaterCanvas.models, ...WallCanvas.models, ...SteelCanvas.models];

    return models.some((model) => {
      const state =
        x + this.width <= model.x ||
        x >= model.x + model.width ||
        y + this.height <= model.y ||
        y >= model.y + model.height;
      return !state;
    });
  }

  // 生成随机坦克模型
  image() {
    return images.get(this.direction)!;
  }
}
