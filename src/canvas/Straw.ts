import config from '../../config';
import CanvasAbstract from './CanvasAbstract';

class Straw extends CanvasAbstract {
  render(): void {
    super.drawModels(config.straw.num);
  }
}

export default new Straw();
