import { upperFirst } from 'lodash';
import PlayerCanvas from '../canvas/PlayerCanvas';
import { images } from '../service/images';
import { ICanvas, IModel } from '../types';
import ModelAbstract from './ModelAbstract';
import config from '../../config';
import { directionEnum } from '../enum/directionEnum';
import utils from '../utils';
import WallCanvas from '../canvas/WallCanvas';
import SteelCanvas from '../canvas/SteelCanvas';

export default class extends ModelAbstract implements IModel {
  canvas: ICanvas = PlayerCanvas;

  name = 'player';

  isEventBind = false;

  image(): HTMLImageElement {
    let direction = this.name + upperFirst(this.direction);
    return images.get(direction as keyof typeof config.images)!;
  }

  render(): void {
    super.draw();
    if (!this.isEventBind) {
      this.isEventBind = true;
      document.addEventListener('keydown', (e) => this.changeDirection(e));
      document.addEventListener('keydown', (e) => this.move(e));
    }
  }

  // 修改玩家坦克方向
  changeDirection(e: KeyboardEvent) {
    switch (e.code) {
      case 'ArrowUp':
        this.direction = directionEnum.top;
        break;
      case 'ArrowDown':
        this.direction = directionEnum.bottom;
        break;
      case 'ArrowLeft':
        this.direction = directionEnum.left;
        break;
      case 'ArrowRight':
        this.direction = directionEnum.right;
        break;
      case 'KeyW':
        this.direction = directionEnum.top;
        break;
      case 'KeyS':
        this.direction = directionEnum.bottom;
        break;
      case 'KeyA':
        this.direction = directionEnum.left;
        break;
      case 'KeyD':
        this.direction = directionEnum.right;
        break;
    }
    this.canvas.renderModels();
  }

  // 玩家坦克移动
  move(e: KeyboardEvent) {
    let x = this.x;
    let y = this.y;
    switch (e.code) {
      case 'ArrowUp':
        y -= 5;
        break;
      case 'ArrowDown':
        y += 5;
        break;
      case 'ArrowLeft':
        x -= 5;
        break;
      case 'ArrowRight':
        x += 5;
        break;
      case 'KeyW':
        y -= 5;
        break;
      case 'KeyS':
        y += 5;
        break;
      case 'KeyA':
        x -= 5;
        break;
      case 'KeyD':
        x += 5;
        break;
    }
    if (
      utils.isCanvasTouch(x, y) ||
      utils.isModelTouch(x, y, this.width, this.height, [
        ...WallCanvas.models,
        ...SteelCanvas.models,
        ...WallCanvas.models,
      ])
    ) {
      return;
    } else {
      this.x = x;
      this.y = y;
      this.canvas.renderModels();
    }
  }
}
