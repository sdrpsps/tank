import { images } from '../service/images';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract {
  name = 'straw';
  image(): HTMLImageElement {
    return images.get('straw')!;
  }
  render(): void {
    // super.draw();
  }
}
