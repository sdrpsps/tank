import config from '../config/index';
import Straw from './canvas/Straw';
import { promises } from './service/images';
import './style.scss';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.style.width = config.canvas.width + 'px';
app.style.height = config.canvas.height + 'px';

async function bootstrap() {
  await Promise.all(promises);
  Straw.render();
}

bootstrap();
