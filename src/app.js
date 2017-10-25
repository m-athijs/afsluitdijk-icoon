// import preloader from 'preloader';
import {PLATFORM} from 'aurelia-pal';

export class App {

  constructor() {
    this.handleBodyClick = e => {
      alert(e.target);
    }

    this.cacheUpdateReady = _ => {
      alert('ready');
      this.showPlayButton = true;
    }

    this.showPlayButton = PLATFORM.global.applicationCache.status === 1 || PLATFORM.global.applicationCache.status === 4;
    this.textvalue = PLATFORM.global.applicationCache.status;
  }

  startAudio() {
    this.textvalue = 'iets';
    document.getElementById('audiofile').play();
  }
  downloadAudio() {
    // this.loader = preloader({
    //   xhrImages: false
    // });
    // this.loader.addAudio('../assets/pinkfloyd5.mp3');
    // this.loader.load();
    // this.loader.on('progress', function(progress) {
    //   console.log(progress);
    //   document.getElementById('downloadProgress').innerHTML = ' (' + Math.ceil(progress * 100) + '%)';
    // });
    // this.loader.on('complete', function() {
    //   $('#downloadButton').hide();
    //   $('#downloadProgress').hide();
    //   $('#playButton').show();
    //   $('#streamButton').hide();
    //   this.loaded = true;
    //   console.log('audio loaded');
    // });
  }

  attached() {
    //this.showPlayButton = PLATFORM.global.applicationCache.status === 1;
    
    // if (PLATFORM.global.applicationCache.status === 1) {
    //   this.showPlayButton = true;
    // }
    document.addEventListener('click', function(e) {
      alert('click');
    });
    PLATFORM.global.applicationCache.addEventListener('cached', function(e) {
      alert('cached');
      this.showPlayButton = true;
      location.reload();
    }, false);

    PLATFORM.global.applicationCache.addEventListener('noupdate', function(e) {
      alert('noupdate');
      this.showPlayButton = true;
    }, false);
    //alert(this.DOM.getElementById('playButton'));
    // this.DOM.applicationCache.addEventListener('updateready', function() {
    //   this.DOM.applicationCache.swapCache();
    //   alert(updateReady);
    // }, false);         
  }
}
