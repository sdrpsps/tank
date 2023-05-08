import config from '../../config';
import location from '../service/location';
import { IModel, ModelConstructor } from '../types';

export default abstract class CanvasAbstract {
  // 所有已创建模型的列表
  protected models: IModel[] = [];

  constructor(
    protected app = document.querySelector('#app')!,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!,
  ) {
    this.createCanvas();
  }

  // 创建画布
  protected createCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;

    this.app.insertAdjacentElement('afterbegin', this.el);
  }

  // 创建模型
  protected createModels() {
    location.getCollect(this.num()).forEach((item) => {
      const Model = this.model();
      const instance = new Model(this.canvas, item.x, item.y);
      this.models.push(instance);
    });
  }

  // 渲染模型并画上画布
  protected renderModels() {
    this.models.forEach((model) => model.render());
  }

  // 抽象渲染方法，所有子类都可以继承
  abstract render(): void;
  abstract num(): number;
  abstract model(): ModelConstructor;
}
