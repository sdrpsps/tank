import { upperFirst } from 'lodash';
import PlayerCanvas from '../canvas/PlayerCanvas';
import { images } from '../service/images';
import { ICanvas, IModel } from '../types';
import ModelAbstract from './ModelAbstract';
import config from '../../config';

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = PlayerCanvas;

  name = 'player';

  image(): HTMLImageElement {
    let direction = this.name + upperFirst(this.direction);
    return images.get(direction as keyof typeof config.images)!;
  }

  render(): void {
    console.log(this.direction);
    super.draw();
  }
}
