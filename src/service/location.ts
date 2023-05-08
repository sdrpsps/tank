import config from '../../config';

interface positionType {
  x: number;
  y: number;
}

class Location {
  // 生成唯一坐标
  public getCollect(num: number) {
    const collection: positionType[] = [];
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position();
        const exists = collection.some((c) => c.x === position.x && c.y === position.y);
        if (!exists) {
          collection.push(position);
          break;
        }
      }
    }
    return collection;
  }

  // 计算随机位置
  public position() {
    return {
      x: Math.floor(Math.random() * (config.canvas.width / config.model.width)) * config.model.width,
      y:
        Math.floor(Math.random() * (config.canvas.height / config.model.height - 5)) * config.model.height +
        config.model.height * 2,
    };
  }
}

export default new Location();
