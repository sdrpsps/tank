import { random } from 'lodash';
import config from '../../config';
import SteelCanvas from '../canvas/SteelCanvas';
import WallCanvas from '../canvas/WallCanvas';
import WaterCanvas from '../canvas/WaterCanvas';
import { tankDirection } from '../enum/tankDirection';
import { images } from '../service/images';
import { ICanvas, IModel } from '../types';
import ModelAbstract from './ModelAbstract';
import TankCanvas from '../canvas/TankCanvas';
import utils from '../utils';

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = TankCanvas;

  name = 'tank';

  render(): void {
    this.move();
    if (random(20) === 1) this.direction = tankDirection.bottom;
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
      if (utils.isModelTouch(x, y) || utils.isCanvasTouch(x, y)) {
        this.randomDirection();
      } else {
        this.x = x;
        this.y = y;
        break;
      }
    }
    super.draw();
  }

  // 生成随机坦克模型
  image() {
    return images.get(this.direction)!;
  }
}
