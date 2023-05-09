import config from '../../config';
import { tankDirection } from '../enum/tankDirection';
import { ICanvas } from '../types';

export default abstract class ModelAbstract {
  public width: number = config.model.width;
  public height: number = config.model.height;
  protected direction: tankDirection = tankDirection.top;
  public abstract canvas: ICanvas;
  protected abstract name: string;

  constructor(public x: number, public y: number) {
    this.randomDirection();
  }

  protected draw() {
    this.canvas.ctx.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height);
  }

  // 随机生成坦克方向
  protected randomDirection() {
    const index = Math.floor(Math.random() * 4);
    this.direction = Object.values(tankDirection)[index];
  }

  // 抽象渲染方法，所有子类都可以继承
  protected abstract render(): void;
  protected abstract image(): HTMLImageElement;
}
