import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router'
import {Location} from '@angular/common';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})

export class PurchaseComponent implements OnInit {

  

  
  constructor(private router: Router,private _location: Location,private route:ActivatedRoute, private movieService: MovieService) { }

  bookings = [];

  ngOnInit() {
    var bookings={
      customer_id:'',
      tickets:'',
      movie_id:'',
      movie_name:'',
      movie_time:'',
      theatre:'',
      screen:'',
      city:'',
      movie_date:'',
      date:'',
      amount:'',
      ticket_price:''
      }

    this.movieService.getBookings().subscribe((result) => { this.bookings = result; });
    }
  }
