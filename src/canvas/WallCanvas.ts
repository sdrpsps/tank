import config from '../../config';
import CanvasAbstract from './CanvasAbstract';
import WallModel from '../model/WallModel';

class WallCanvas extends CanvasAbstract {
  constructor() {
    super();
    super.createModels(config.wall.num, WallModel);
  }
  render(): void {
    super.renderModels();
  }
}

export default new WallCanvas();
