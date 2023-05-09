import WaterCanvas from '../canvas/WaterCanvas';
import { images } from '../service/images';
import { ICanvas, IModel } from '../types';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = WaterCanvas;

  name = 'water';

  image(): HTMLImageElement {
    return images.get('water')!;
  }

  render(): void {
    super.draw();
  }
}
