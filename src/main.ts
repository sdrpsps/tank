import config from '../config/index';
import StrawCanvas from './canvas/StrawCanvas';
import WallCanvas from './canvas/WallCanvas';
import { promises } from './service/images';
import './style.scss';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.style.width = config.canvas.width + 'px';
app.style.height = config.canvas.height + 'px';

async function bootstrap() {
  await Promise.all(promises);
  StrawCanvas.render();
  WallCanvas.render();
}

bootstrap();
