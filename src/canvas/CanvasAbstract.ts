import config from '../../config';
import location from '../service/location';
import { BulletModelConstructor, IModel, ModelConstructor } from '../types';

export default abstract class CanvasAbstract {
  // 所有已创建模型的列表
  public models: IModel[] = [];

  constructor(
    protected name: string,
    protected app = document.querySelector('#app')!,
    protected el = document.createElement('canvas'),
    public ctx = el.getContext('2d')!,
  ) {
    this.createCanvas();
  }
  // 渲染模型并画上画布
  public renderModels() {
    this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
    this.models.forEach((model) => model.render());
  }

  public removeModel(model: IModel) {
    this.models = this.models.filter((m) => m !== model);
  }

  // 创建画布
  protected createCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.el.setAttribute('id', this.name);
    this.app.appendChild(this.el);
  }

  // 创建模型
  protected createModels() {
    location.getCollect(this.num()).forEach((item) => {
      const Model = this.model() as ModelConstructor;
      const instance = new Model(item.x, item.y);
      this.models.push(instance);
    });
  }

  // 抽象渲染方法，所有子类都可以继承
  abstract render(): void;
  abstract num(): number;
  abstract model(): ModelConstructor | BulletModelConstructor;
}
