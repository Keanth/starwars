import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header><h1>{{ title }}</h1></header>
  `,
  styles: [`

    @font-face {
        font-family: STARWARS;
        src: url( ../assets/starwarsfont/STARWARS.woff );
    }

    header {
      text-align: center;
      padding-bottom: 50px;
      padding-top: 50px;
      background: white;
      font-family: STARWARS;
    }

    h1 {
      font-size: 3em;
      text-shadow: 0 0 10px rgba( 0, 0, 0, .20 );
    }

  `]
})
export class HeaderComponent implements OnInit {

  title = 'Star Wars Episodes';

  constructor() { }

  ngOnInit() {
  }

}
