import StrawCanvas from '../canvas/StrawCanvas';
import { images } from '../service/images';
import { ICanvas, IModel } from '../types';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = StrawCanvas;

  name = 'straw';

  image(): HTMLImageElement {
    return images.get('straw')!;
  }

  render(): void {
    super.draw();
  }
}
