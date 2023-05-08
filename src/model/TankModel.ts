import { tankDirection } from '../enum/tankDirection';
import { images } from '../service/images';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract {
  protected direction: tankDirection = tankDirection.top;

  render(): void {
    this.randomDirection();
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
