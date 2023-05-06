import straw from '../src/static/images/straw/straw.png';
import wall from '../src/static/images/wall/wall.gif';
import water from '../src/static/images/water/water.gif';
import steel from '../src/static/images/wall/steels.gif';

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
    num: 50,
  },
  // 砖墙配置
  wall: {
    num: 50,
  },
  // 水配置
  water: {
    num: 50,
  },
  // 白墙配置
  steel: {
    num: 50,
  },
  // 图片加载地址
  images: {
    straw,
    wall,
    water,
    steel,
  },
};
