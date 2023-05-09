import WallCanvas from '../canvas/WallCanvas';
import { images } from '../service/images';
import { ICanvas, IModel } from '../types';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = WallCanvas;

  name = 'wall';

  image(): HTMLImageElement {
    return images.get('wall')!;
  }

  render(): void {
    super.draw();
  }
}
