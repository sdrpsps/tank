import config from '../../config';
import { tankDirection } from '../enum/tankDirection';
import { images } from '../service/images';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract {
  protected direction: tankDirection = tankDirection.top;

  render(): void {
    this.randomDirection();
    // super.draw(this.randomDraw());
    setInterval(() => this.move(), 500);
  }

  // 坦克移动
  move() {
    this.canvas.clearRect(this.x, this.y, config.model.width, config.model.height);
    switch (this.direction) {
      case tankDirection.top:
        this.y -= 2;
        break;
      case tankDirection.right:
        this.x += 2;
        break;
      case tankDirection.bottom:
        this.y += 2;
        break;
      case tankDirection.left:
        this.x -= 2;
        break;
      default:
        break;
    }
    super.draw(this.randomDraw());
  }

  // 随机生成坦克方向
  randomDirection() {
    const index = Math.floor(Math.random() * 4);
    this.direction = Object.values(tankDirection)[index];
  }

  // 生成随机坦克模型
  randomDraw() {
    return images.get(this.direction)!;
  }
}
