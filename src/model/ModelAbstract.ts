import config from '../../config';
import { IModel } from '../types';

export default abstract class ModelAbstract implements IModel {
  constructor(protected canvas: CanvasRenderingContext2D, protected x: number, protected y: number) {}

  protected draw(img: HTMLImageElement) {
    this.canvas.drawImage(img, this.x, this.y, config.model.width, config.model.height);
  }

  // 抽象渲染方法，所有子类都可以继承
  abstract render(): void;
}
