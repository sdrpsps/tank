import BulletCanvas from '../canvas/BulletCanvas';
import { images } from '../service/images';
import { ICanvas, IModel } from '../types';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = BulletCanvas;

  name = 'bullet';

  image(): HTMLImageElement {
    return images.get('bullet')!;
  }

  render(): void {
    super.draw();
  }
}
