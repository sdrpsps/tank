import config from '../../config';
import { tankDirection } from '../enum/tankDirection';

export default abstract class ModelAbstract {
  public width: number = config.model.width;
  public height: number = config.model.height;
  protected direction: tankDirection = tankDirection.top;
  abstract name: string;

  constructor(protected canvas: CanvasRenderingContext2D, public x: number, public y: number) {
    this.randomDirection();
  }

  protected draw() {
    this.canvas.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height);
  }

  // 随机生成坦克方向
  protected randomDirection() {
    const index = Math.floor(Math.random() * 4);
    this.direction = Object.values(tankDirection)[index];
  }

  // 抽象渲染方法，所有子类都可以继承
  abstract render(): void;
  abstract image(): HTMLImageElement;
}
