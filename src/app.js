import preloader from 'preloader';

export class App {
  constructor() {
    // this.loaded = false;
  }

  startAudio() {
    this.playaudio = true;
  }

  downloadAudio() {
    this.loader = preloader({
        xhrImages: false
      });
      this.loader.addAudio('../assets/audio1.mp3');
      this.loader.load();
      this.loader.on('progress', function(progress) {
        console.log(progress);
        document.getElementById('downloadProgress').innerHTML = ' (' + Math.ceil(progress * 100) + '%)';
      });
      this.loader.on('complete', function() {
        $('#downloadButton').hide();
        $('#downloadProgress').hide();
        $('#playButton').show();
        $('#streamButton').hide();
        this.loaded = true;
        console.log('audio loaded');
      });
  }
}
