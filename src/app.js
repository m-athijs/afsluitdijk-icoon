import preloader from 'preloader';
import {inject} from 'aurelia-framework';

// @inject(preloader)
export class App {
  constructor() {
    this.message = 'Hello Aurelia on Netlify!';
    this.loaded = 0;
    // this.loader = loader;

    this.loader = preloader({
      xhrImages: false
    });
    this.loader.add('../assets/audio1.mp3');
    this.loader.load();
    this.loader.on('progress',function(progress) {
      this.loaded = progress * 100;
      console.log(progress);
    });
  }
}
