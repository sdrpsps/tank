import config from '../config/index';
import BossCanvas from './canvas/BossCanvas';
import BulletCanvas from './canvas/BulletCanvas';
import SteelCanvas from './canvas/SteelCanvas';
import StrawCanvas from './canvas/StrawCanvas';
import TankCanvas from './canvas/TankCanvas';
import WallCanvas from './canvas/WallCanvas';
import WaterCanvas from './canvas/WaterCanvas';
import { promises } from './service/images';
import './style.scss';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.style.width = config.canvas.width + 'px';
app.style.height = config.canvas.height + 'px';

async function bootstrap() {
  await Promise.all(promises);
  StrawCanvas.render();
  WallCanvas.render();
  WaterCanvas.render();
  SteelCanvas.render();
  TankCanvas.render();
  BulletCanvas.render();
  BossCanvas.render();
}

bootstrap();
