import config from '../config';
import SteelCanvas from './canvas/SteelCanvas';
import WallCanvas from './canvas/WallCanvas';

export default {
  // 画布碰撞检测
  isCanvasTouch(x: number, y: number, width: number = config.model.width, height: number = config.model.height) {
    return x < 0 || x + width > config.canvas.width || y < 0 || y + height > config.canvas.height;
  },

  // 模型碰撞检测
  isModelTouch(
    x: number,
    y: number,
    width: number = config.model.width,
    height: number = config.model.height,
    models = [...WallCanvas.models, ...SteelCanvas.models],
  ) {
    return models.find((model) => {
      const state =
        x + width <= model.x || x >= model.x + model.width || y + height <= model.y || y >= model.y + model.height;
      return !state;
    });
  },
};
