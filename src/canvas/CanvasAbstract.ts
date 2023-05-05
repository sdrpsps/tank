import config from '../../config';

export default abstract class CanvasAbstract {
  constructor(
    protected app = document.querySelector('#app')!,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!,
  ) {
    this.createCanvas();
  }

  protected createCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;

    this.app.insertAdjacentElement('afterbegin', this.el);
  }
}
