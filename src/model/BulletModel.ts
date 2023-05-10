import config from '../../config';
import BulletCanvas from '../canvas/BulletCanvas';
import { tankDirection } from '../enum/tankDirection';
import { images } from '../service/images';
import { ICanvas, IModel } from '../types';
import utils from '../utils';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = BulletCanvas;

  name = 'bullet';

  constructor(public tank: IModel) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2);
    this.direction = tank.direction as tankDirection;
  }

  image(): HTMLImageElement {
    return images.get('bullet')!;
  }

  render(): void {
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
    }
    // 碰撞检测
    const touchModel = utils.isModelTouch(x, y, 2, 2);
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
