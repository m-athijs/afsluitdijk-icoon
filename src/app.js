import preloader from 'preloader';

export class App {
  constructor() {
  }

  startAudio() {
    this.playaudio = true;
  }

  downloadAudio() {
    this.loaded = 'downloading...';
    this.loader = preloader({
      xhrImages: false
    });
    this.loader.addAudio('../assets/audio1.mp3');
    this.loader.load();
    this.loader.on('progress', function(progress) {
      console.log(progress);
      document.getElementById('downloadProgress').innerHTML = Math.ceil(progress * 100) + '%';
    });
    this.loader.on('complete', function() {
      this.loaded = 'done';
      console.log('audio loaded');
    });
  }

}
