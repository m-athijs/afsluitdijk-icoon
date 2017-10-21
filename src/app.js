import preloader from 'preloader';

export class App {
  startAudio() {
    document.getElementById('audiofile').play();
  }
  downloadAudio() {
    this.loader = preloader({
      xhrImages: false
    });
    this.loader.addAudio('../assets/audio2.mp3');
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
