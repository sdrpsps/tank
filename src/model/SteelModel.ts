import SteelCanvas from '../canvas/SteelCanvas';
import { images } from '../service/images';
import { ICanvas, IModel } from '../types';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = SteelCanvas;
  name = 'steel';
  image(): HTMLImageElement {
    return images.get('steel')!;
  }
  render(): void {
    super.draw();
  }
}
