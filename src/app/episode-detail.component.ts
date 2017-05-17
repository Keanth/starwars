import { Episode } from './episode';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-episode-detail',
  template: `

    
    <div id='details-container'>
      

      <div id='details' *ngIf='episode'>
        <p><span class='bold'>{{ episode.title }}</span></p>
        <p>Created: <span class='bold'>{{ episode.created }}</span></p>
        <p>Director: <span class='bold'>{{ episode.director }}</span></p>
        <p>Producer: <span class='bold'>{{ episode.producer }}</span></p>
        
      </div>

      <div class='crawl' *ngIf='episode'>
        <div class='crawl-inside crawl-animation'>{{ episode.opening_crawl }}</div>
      </div>

      

    </div>
  `,
  styles: [`
    #details-container {
      // text-align: center;
      overflow: hidden;
      
      background: black;
      height: calc(100% - 500px); 
      color: black;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;

    }

    #details {
      background: rgba(255, 255, 255, 0.90);
      padding: 20px 50px;
      border-radius: 3px;
      z-index: 20;
    }

    .bold {
      font-weight: 700;
    }

    .crawl {
      position: absolute;
      bottom: 0;
      color: gold;
      width: 80%;
      font-size: 4em;
      transform-origin: 50% 100%;
	    transform: perspective(200px) rotateX(25deg);
    }

    .crawl-inside {
      position: absolute;
      top: 0;
      
    }

    .crawl-animation { animation: move 75s linear forwards; }

    @keyframes move {
      0% {
        top: 0; 
        opactiy: 1; }
      100% {
        top: -5000px; 
        opactiy: 0; 
        display: none; }
    }
  `]
})
export class EpisodeDetailComponent implements OnInit {

  @Input() episode: Episode;

  constructor() { }

  ngOnInit() {
  }

}
