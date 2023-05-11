import config from '../config/index';
import BossCanvas from './canvas/BossCanvas';
import BulletCanvas from './canvas/BulletCanvas';
import PlayerCanvas from './canvas/PlayerCanvas';
import SteelCanvas from './canvas/SteelCanvas';
import StrawCanvas from './canvas/StrawCanvas';
import TankCanvas from './canvas/TankCanvas';
import WallCanvas from './canvas/WallCanvas';
import WaterCanvas from './canvas/WaterCanvas';
import audio from './service/audio';
import { promises } from './service/images';
import './style.scss';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.style.width = config.canvas.width + 'px';
app.style.height = config.canvas.height + 'px';

export default {
  // 是否已开始游戏
  isStart: false,
  // 是否已开始游戏
  isEnd: false,
  // 定时器
  interval: 0,

  bootstrap() {
    app.addEventListener('click', async () => {
      await this.start();
      this.interval = setInterval(() => {
        if (TankCanvas.models.length === 0) this.isEnd = true;
        if (PlayerCanvas.models.length === 0 || BossCanvas.models.length === 0) this.isEnd = true;
        if (this.isEnd) this.end();
      }, 100);
    });
  },

  async start() {
    if (this.isStart) return;
    this.isStart = true;

    app.style.backgroundImage = 'none';
    audio.start();

    await Promise.all(promises);

    StrawCanvas.render();
    WallCanvas.render();
    WaterCanvas.render();
    SteelCanvas.render();
    TankCanvas.render();
    BulletCanvas.render();
    BossCanvas.render();
    PlayerCanvas.render();
  },

  end() {
    clearInterval(this.interval);
    TankCanvas.stop();
    BulletCanvas.stop();
    console.log('结束');
  },
};
