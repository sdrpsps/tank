import config from '../../config';
import { images } from '../service/images';

export default abstract class CanvasAbstract {
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

  // 画模型
  protected drawModels(num: number) {
    this.positionCollect(num).forEach((item) => {
      this.canvas.drawImage(images.get('straw')!, item.x, item.y, config.model.height, config.model.width);
    });
  }

  // 生成唯一坐标
  protected positionCollect(num: number) {
    const collection: { x: number; y: number }[] = [];
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position();
        const exists = collection.some((c) => c.x === position.x && c.y === position.y);
        if (!exists) {
          collection.push(position);
          break;
        }
      }
    }
    return collection;
  }

  // 计算随机位置
  protected position() {
    return {
      x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y: Math.floor(Math.random() * (config.canvas.height / config.model.height)) * config.model.height,
    };
  }

  // 抽象渲染方法
  abstract render(): void;
}
