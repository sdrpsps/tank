import { random, upperFirst } from 'lodash';
import SteelCanvas from '../canvas/SteelCanvas';
import TankCanvas from '../canvas/TankCanvas';
import WallCanvas from '../canvas/WallCanvas';
import WaterCanvas from '../canvas/WaterCanvas';
import { directionEnum } from '../enum/directionEnum';
import { images } from '../service/images';
import { ICanvas, IModel } from '../types';
import utils from '../utils';
import ModelAbstract from './ModelAbstract';
import BossCanvas from '../canvas/BossCanvas';
import config from '../../config';

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = TankCanvas;

  name = 'tank';

  render(): void {
    this.move();
    if (random(20) === 1) this.direction = directionEnum.bottom;
  }

  // 坦克移动
  move() {
    while (true) {
      let x = this.x;
      let y = this.y;
      switch (this.direction) {
        case directionEnum.top:
          y--;
          break;
        case directionEnum.right:
          x++;
          break;
        case directionEnum.bottom:
          y++;
          break;
        case directionEnum.left:
          x--;
          break;
        default:
          break;
      }
      if (
        utils.isModelTouch(x, y, this.width, this.height, [
          ...WallCanvas.models,
          ...SteelCanvas.models,
          ...WaterCanvas.models,
          ...BossCanvas.models,
        ]) ||
        utils.isCanvasTouch(x, y)
      ) {
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
    let direction = this.name + upperFirst(this.direction);
    return images.get(direction as keyof typeof config.images)!;
  }
}
