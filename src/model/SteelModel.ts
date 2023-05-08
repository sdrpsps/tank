import { images } from '../service/images';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract {
  name = 'steel';
  image(): HTMLImageElement {
    return images.get('steel')!;
  }
  render(): void {
    super.draw();
  }
}
