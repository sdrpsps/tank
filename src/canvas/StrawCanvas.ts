import config from '../../config';
import CanvasAbstract from './CanvasAbstract';
import StrawModel from '../model/StrawModel';

class StrawCanvas extends CanvasAbstract {
  constructor() {
    super();
    super.createModels(config.straw.num, StrawModel);
  }
  render(): void {
    super.renderModels();
  }
}

export default new StrawCanvas();
