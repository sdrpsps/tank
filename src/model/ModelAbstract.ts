import config from '../../config';
import { images } from '../service/images';
import { IModel } from '../types';

export default abstract class ModelAbstract implements IModel {
  constructor(protected canvas: CanvasRenderingContext2D, protected x: number, protected y: number) {
    this.canvas.drawImage(images.get('straw')!, x, y, config.model.width, config.model.height);
  }

  test() {
    console.log('模型抽象类test', 123);
  }
}
