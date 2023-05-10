import straw from '../src/assets/images/straw/straw.png';
import wall from '../src/assets/images/wall/wall.gif';
import water from '../src/assets/images/water/water.gif';
import steel from '../src/assets/images/wall/steels.gif';
import tankTop from '../src/assets/images/tank/top.gif';
import tankRight from '../src/assets/images/tank/right.gif';
import tankBottom from '../src/assets/images/tank/bottom.gif';
import tankLeft from '../src/assets/images/tank/left.gif';
import bullet from '../src/assets/images/bullet/bullet.jpg';
import boss from '../src/assets/images/boss/boss.png';

import blast0 from '../src/assets/images/blasts/blast0.gif';
import blast1 from '../src/assets/images/blasts/blast1.gif';
import blast2 from '../src/assets/images/blasts/blast2.gif';
import blast3 from '../src/assets/images/blasts/blast3.gif';
import blast4 from '../src/assets/images/blasts/blast4.gif';
import blast5 from '../src/assets/images/blasts/blast5.gif';
import blast6 from '../src/assets/images/blasts/blast6.gif';
import blast7 from '../src/assets/images/blasts/blast7.gif';

export default {
  // 画布尺寸
  canvas: {
    width: 900,
    height: 600,
  },
  // 模型尺寸
  model: {
    width: 30,
    height: 30,
  },
  // 草坪配置
  straw: {
    num: 120,
  },
  // 砖墙配置
  wall: {
    num: 160,
  },
  // 水配置
  water: {
    num: 50,
  },
  // 白墙配置
  steel: {
    num: 50,
  },
  // 敌方坦克
  tank: {
    num: 20,
  },
  // 图片加载地址
  images: {
    straw,
    wall,
    water,
    steel,
    tankTop,
    tankRight,
    tankBottom,
    tankLeft,
    bullet,
    boss,
  },
  blastList: [blast0, blast1, blast2, blast3, blast4, blast5, blast6, blast7],
  timeout: 20,
};
