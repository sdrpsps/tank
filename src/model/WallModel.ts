import { images } from '../service/images';
import { IModel } from '../types';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract implements IModel {
  name = 'wall';
  image(): HTMLImageElement {
    return images.get('wall')!;
  }
  render(): void {
    super.draw();
  }
}
