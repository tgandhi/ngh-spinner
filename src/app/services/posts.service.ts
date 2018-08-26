import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import { HttpClient,HttpHeaders  } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private API_URL = 'http://localhost:3000' ;
  constructor(private http: HttpClient) { }

  getPost(){
    return this.http.get(this.API_URL + '/posts');
  }

}
