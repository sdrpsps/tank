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
  // 游戏状态 0正常 1赢 2输
  state: 0,
  // 定时器
  interval: 0,

  // 初始化
  bootstrap() {
    app.addEventListener('click', async () => {
      await this.start();
      this.interval = setInterval(() => {
        if (TankCanvas.models.length === 0) this.state = 1;
        if (PlayerCanvas.models.length === 0 || BossCanvas.models.length === 0) this.state = 2;
        if (this.state !== 0) this.end();
      }, 100);
    });
  },

  // 开始游戏
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

  // 结束游戏
  end() {
    clearInterval(this.interval);
    TankCanvas.stop();
    BulletCanvas.stop();
    this.createText();
  },

  // 结束文字
  createText() {
    const el = document.createElement('canvas');
    el.width = config.canvas.width;
    el.height = config.canvas.height;

    const ctx = el.getContext('2d')!;
    ctx.fillStyle = '#fff';
    ctx.font = '80px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText(this.state === 1 ? '你真棒' : '菜', config.canvas.width / 2, config.canvas.height / 2);
    app.appendChild(el);
  },
};
