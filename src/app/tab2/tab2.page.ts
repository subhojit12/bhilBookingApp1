import { Component } from '@angular/core';
import {MovieService} from '../movie.service';
import { Router } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items:any=[]
  movies:any = [];

  constructor(private router: Router , private movieService:MovieService, private route:ActivatedRoute){
    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;});
  }
  initializeItems(): void {
    this.movies
    }
    getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();
  
      // set val to the value of the searchbar
      let val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.movies = this.movies.filter((item) => {
          return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
        })
      }
    }
}
