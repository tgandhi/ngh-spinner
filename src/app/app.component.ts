import { Component,OnInit } from '@angular/core';
import {NghSpinnerService} from '../../projects/ngh-spinner/src/public_api'

import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private loader: NghSpinnerService,private postsService :PostsService) { }

  title = 'ngh-spinner-app'; 
  bgColor ='rgba(0,0,0,0.5)'; // overlay background color
  color ='#2598db'; // color of spinner
  type ='square-spin'; // type of spinner
  ngOnInit(){

    // this.postsService.getPost().subscribe( ) ;
    
    this.loader.show();
    setTimeout(() => {
      this.loader.hide();
    }, 5000);


  }

}
