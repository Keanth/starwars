import { Http, Headers } from '@angular/http';
import { Episode } from './episode';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EpisodeService {

  private _requestURL = 'http://swapi.co/api/films/';

  constructor( private _http: Http ) { }

  getEpisodes() {
    return this._http.get( this._requestURL )
      .toPromise()
      .then( response => response.json() )
      .catch( e => console.log( e ) );
  }

}
