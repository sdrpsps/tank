import { images } from '../service/images';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract {
  name = 'wall';
  image(): HTMLImageElement {
    return images.get('wall')!;
  }
  render(): void {
    super.draw();
  }
}
