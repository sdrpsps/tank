import { images } from '../service/images';
import ModelAbstract from './ModelAbstract';

export default class extends ModelAbstract {
  render(): void {
    super.draw(images.get('straw')!);
  }
}
