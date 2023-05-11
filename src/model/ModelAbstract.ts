import config from '../../config';
import { directionEnum } from '../enum/directionEnum';
import { ICanvas, IModel } from '../types';

export default abstract class ModelAbstract {
  public width: number = config.model.width;
  public height: number = config.model.height;
  public direction: directionEnum = directionEnum.top;
  public abstract canvas: ICanvas;
  abstract name: string;

  constructor(public x: number, public y: number) {
    this.randomDirection();
  }

  public destroy() {
    this.canvas.removeModel(this);
    this.canvas.renderModels();
  }

  protected draw() {
    this.canvas.ctx.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height);
  }

  // 随机生成坦克方向
  protected randomDirection() {
    const index = Math.floor(Math.random() * 4);
    this.direction = Object.values(directionEnum)[index];
  }

  // 爆炸效果方法
  protected blast(model: IModel) {
    Array(...Array(8).keys()).reduce((promise, index) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const img = new Image();
          img.src = config.blastList[index];
          img.onload = () => {
            this.canvas.ctx.drawImage(img, model.x, model.y, model.width, model.height);
            resolve(promise);
          };
        }, 100);
      });
    }, Promise.resolve());
  }

  // 抽象渲染方法，所有子类都可以继承
  abstract render(): void;
  abstract image(): HTMLImageElement;
}
