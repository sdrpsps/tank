import start from '../assets/music/start.wav';
import fire from '../assets/music/fire.wav';
import blast from '../assets/music/blast.wav';

export default {
  init() {
    const aStart: HTMLAudioElement = document.querySelector('#aStart')!;
    aStart.src = start;
    const aFire: HTMLAudioElement = document.querySelector('#aFire')!;
    aFire.src = fire;
    const aBlast: HTMLAudioElement = document.querySelector('#aBlast')!;
    aBlast.src = blast;
  },

  el(id: string): HTMLAudioElement {
    return document.querySelector(id)!;
  },

  start() {
    this.el('#aStart').play();
  },

  fire() {
    this.el('#aFire').play();
  },

  blast() {
    this.el('#aBlast').play();
  },
};
