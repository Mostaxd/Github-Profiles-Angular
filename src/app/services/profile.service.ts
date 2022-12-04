import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  search : string = ''


  constructor(private http : HttpClient) { }

  rootUrl = 'https://api.github.com/'


  getProfile (){
    return this.http.get(this.rootUrl + `users/${this.search}`);
  }

  updateSearchValue(value : string){
    this.search = value
  }
}
