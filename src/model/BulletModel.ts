import config from '../../config';
import BossCanvas from '../canvas/BossCanvas';
import BulletCanvas from '../canvas/BulletCanvas';
import SteelCanvas from '../canvas/SteelCanvas';
import WallCanvas from '../canvas/WallCanvas';
import { directionEnum } from '../enum/directionEnum';
import { images } from '../service/images';
import { ICanvas, IModel } from '../types';
import utils from '../utils';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = BulletCanvas;

  name = 'bullet';

  constructor(public tank: IModel) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2);
    this.direction = tank.direction as directionEnum;
  }

  image(): HTMLImageElement {
    return images.get('bullet')!;
  }

  render(): void {
    let x = this.x;
    let y = this.y;
    switch (this.direction) {
      case directionEnum.top:
        y -= 5;
        break;
      case directionEnum.right:
        x += 5;
        break;
      case directionEnum.bottom:
        y += 5;
        break;
      case directionEnum.left:
        x -= 5;
        break;
    }
    // 碰撞检测
    const touchModel = utils.isModelTouch(x, y, 2, 2, [
      ...WallCanvas.models,
      ...SteelCanvas.models,
      ...BossCanvas.models,
    ]);
    if (utils.isCanvasTouch(x, y, 2, 2)) {
      this.destroy();
    } else if (touchModel) {
      this.destroy();
      if (touchModel.name !== 'steel') touchModel.destroy();
      this.blast(touchModel);
    } else {
      this.x = x;
      this.y = y;
      this.draw();
    }
  }

  protected draw() {
    this.canvas.ctx.drawImage(this.image(), this.x, this.y, 2, 2);
  }
}
