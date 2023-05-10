import BossCanvas from '../canvas/BossCanvas';
import { images } from '../service/images';
import { ICanvas, IModel } from '../types';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = BossCanvas;

  name = 'boss';

  image(): HTMLImageElement {
    return images.get('boss')!;
  }

  render(): void {
    super.draw();
  }
}
