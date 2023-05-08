import { tankDirection } from '../enum/tankDirection';
import { images } from '../service/images';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract {
  name = 'tank';

  render(): void {
    this.move();
  }

  // 坦克移动
  move() {
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
    super.draw();
  }

  // 生成随机坦克模型
  image() {
    return images.get(this.direction)!;
  }
}
