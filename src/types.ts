export interface ModelConstructor {
  new (x: number, y: number): IModel;
}

export interface BulletModelConstructor {
  new (tank: IModel): IModel;
}

export interface IModel {
  render: () => void;
  image: () => HTMLImageElement;
  destroy: () => void;
  x: number;
  y: number;
  height: number;
  width: number;
  tank?: IModel;
  direction: string;
  name: string;
}

export interface ICanvas {
  num: () => number;
  model: () => ModelConstructor | BulletModelConstructor;
  renderModels: () => void;
  removeModel: (model: IModel) => void;
  stop?: () => void;
  ctx: CanvasRenderingContext2D;
}
