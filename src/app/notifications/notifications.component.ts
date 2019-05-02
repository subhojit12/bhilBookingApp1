import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
movies:any=[]
  constructor(private router: Router , private movieService:MovieService) {
    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;});
   }

  ngOnInit() {}

}
