import { Injectable } from '@angular/core';
import {URLSearchParams} from '@angular/http';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class SearchService {
  public apiRoot = 'http://itunes.apple.com/search';
  public notify = new Subject<Boolean>();
  constructor(public http: Http) { }
getSearchData (searchQuery) {
  const url = `${this.apiRoot}`;
  const search = new URLSearchParams();
  search.set('term', searchQuery.artist);
  search.set('limit', searchQuery.limit);
 return this.http.get(url, {search: search}).map((res: Response) => res.json());
}
}
