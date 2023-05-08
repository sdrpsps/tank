import { images } from '../service/images';
import { IModel } from '../types';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract implements IModel {
  name = 'water';
  image(): HTMLImageElement {
    return images.get('water')!;
  }
  render(): void {
    super.draw();
  }
}
