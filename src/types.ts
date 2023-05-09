export interface ModelConstructor {
  new (x: number, y: number): IModel;
}

export interface IModel {
  render: () => void;
  image: () => HTMLImageElement;
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface ICanvas {
  num: () => number;
  model: () => ModelConstructor;
  ctx: CanvasRenderingContext2D;
}
