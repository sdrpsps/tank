export interface ModelConstructor {
  new (canvas: CanvasRenderingContext2D, x: number, y: number): IModel;
}

export interface IModel {
  test: () => void;
}
