import { images } from '../service/images';
import { IModel } from '../types';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract implements IModel {
  name = 'straw';
  image(): HTMLImageElement {
    return images.get('straw')!;
  }
  render(): void {
    super.draw();
  }
}
