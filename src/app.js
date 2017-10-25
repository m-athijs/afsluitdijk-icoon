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
    document.getElementById('audiofile').play();
  }
  downloadAudio() {
    // this.loader = preloader({
    //   xhrImages: false
    // });
    // this.loader.addAudio('../assets/pinkfloyd5.mp3');
    // this.loader.load();
    // this.loader.on('progress', function(progress) {
    //   alert(progress);
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
      // alert('click');
    });
    PLATFORM.global.applicationCache.addEventListener('cached', function(e) {
      alert('*** cached ***');
      location.reload();
    }, false);

    PLATFORM.global.applicationCache.addEventListener('noupdate', function(e) {
      alert('*** noupdate ***');
      location.reload();
    }, false);

    PLATFORM.global.applicationCache.addEventListener('updateready', function(e) {
      alert('*** updateready ***');
      location.reload();
    }, false);

    PLATFORM.global.applicationCache.addEventListener('checking', function(e) {
      alert('*** checking ***');
    }, false);

    PLATFORM.global.applicationCache.addEventListener('downloading', function(e) {
      alert('*** downloading ***');
    }, false);

    PLATFORM.global.applicationCache.addEventListener('error', function(e) {
      alert('*** error ***');
    }, false);

    PLATFORM.global.applicationCache.addEventListener('obsolete', function(e) {
      alert('*** obsolete ***');
    }, false);

    PLATFORM.global.applicationCache.addEventListener('progress', function(e) {
      alert('*** progress ***');
    }, false);
  }
}
