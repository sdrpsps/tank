export interface ModelConstructor {
  new (x: number, y: number): IModel;
}

export interface BulletModelConstructor {
  new (tank: IModel): IModel;
}

export interface IModel {
  render: () => void;
  image: () => HTMLImageElement;
  x: number;
  y: number;
  height: number;
  width: number;
  tank?: IModel;
  direction: string;
}

export interface ICanvas {
  num: () => number;
  model: () => ModelConstructor | BulletModelConstructor;
  ctx: CanvasRenderingContext2D;
}
