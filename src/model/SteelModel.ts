import { images } from '../service/images';
import { IModel } from '../types';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract implements IModel {
  name = 'steel';
  image(): HTMLImageElement {
    return images.get('steel')!;
  }
  render(): void {
    super.draw();
  }
}
