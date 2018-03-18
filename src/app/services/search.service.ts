import { Injectable } from '@angular/core';
import {URLSearchParams} from '@angular/http';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
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
if (searchQuery) {
  for (const key in searchQuery) {
    if (searchQuery.hasOwnProperty(key)) {
      search.set(key, searchQuery[key]);
    }
}
}

 return this.http.get(url, {search: search}).map((res: Response) => res.json())
 .catch( this.handleErrorObservable );

}
private handleErrorObservable (error: Response | any) {
  console.error(error.message || error);
  return Observable.throw(error.message || error);
}
}
