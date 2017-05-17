import { EpisodeService } from './episode.service';
import { Episode } from './episode';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <div id='container'>
      <app-header></app-header>
      
      <div id='episodes'>
        <div class='poster-container' 
            *ngFor='let episode of episodeArr'>

          <div class='poster' 
              [ngStyle]="{'background-image': 'url(' + episode.cover + ')'}"
              (click)='onClick(episode)'
              [class.selected]='episode === selectedEpisode'></div>
          <h3>{{ episode.title }}</h3>

        </div>
      </div>

      <app-episode-detail [episode]='selectedEpisode'></app-episode-detail>
    </div>
  `,
  styles: [`

    app-episode-detail {
      height: 100%;
    }
    h3 {
      font-size: 1em;
      margin: auto;
      margin-top: 20px;
      max-width: 100px;
      font-weight: 400;
    }

    #container {
      // display: flex;
      // flex-direction: column;
      height: 100vh;
    }

    #episodes {
      display: flex;
      justify-content: center;
      text-align: center;
      padding-bottom: 50px;
      background: white;
    }

    .poster {
      height: 170px;
      width: 120px;
      margin-right: 10px;
      margin-left: 10px;
      background-size: cover;
      transition: transform .3s;
      border-radius: 3px;
    }

    .poster.selected {
      z-index: 1;
      transform: scale( 1.1 );
      box-shadow: 0 0 20px 2px rgba(0, 0, 0, .30);
    }

    .poster:hover {
      z-index: 1;
      transform: scale( 1.1 );
      box-shadow: 0 0 20px 2px rgba(0, 0, 0, .30);
      cursor: pointer;
    }

    .poster:last-child {
      margin-right: 0;
    }
    
    
  `]
})
export class AppComponent implements OnInit {

  episodes;
  episodeArr;
  selectedEpisode: Episode;

  onClick( episode: Episode ): void {
    this.selectedEpisode = episode;
    // document.querySelector( '.crawl-inside' ).classList.add( '.crawl-animation' );
  }

  constructor( private _episodeService: EpisodeService ) { }

  parseEpisodesToArray( ep ) {
    const jsonData = ep['results'];
    var arr = [];
    for ( let i in jsonData ) {
      if (true) {
        var obj = {};
        obj['cover'] = `./assets/images/poster-${ parseInt(i) +1}.png`;
        var spliceCreated = JSON.stringify( jsonData[i]['created'] ).slice(1,11);
        obj['created'] = spliceCreated;
        obj['director'] = jsonData[i]['director'];
        obj['opening_crawl'] = jsonData[i]['opening_crawl'];
        obj['producer'] = jsonData[i]['producer'];
        obj['title'] = jsonData[i]['title'];
        arr.push(obj) ;
      }
    }
    this.episodeArr = arr;
    console.log( arr );
  }

  getEpisode(): void {
    this._episodeService.getEpisodes()
      .then( episodes => this.episodes = episodes )
      .then( () => this.parseEpisodesToArray( this.episodes ) )
      .catch( e => console.log( `Reject: ${ e }`));
  }

  ngOnInit(): void {
    this.getEpisode();
    // setTimeout(function() {
    //   console.log( this.episodes );
    // }, 3000);
  }

}
