import { images } from '../service/images';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract {
  name = 'water';
  image(): HTMLImageElement {
    return images.get('water')!;
  }
  render(): void {
    // super.draw();
  }
}
