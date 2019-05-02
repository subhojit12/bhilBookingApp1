import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {
  customers=[];
  customer:any={};
  password:any={};
  constructor(private router : Router,  private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.customer={
      name:'', email:'', phone:'', password:'', address:''
    }
    this.movieService.getRemoteCustomers().subscribe((result) => {this.customers = result;});
  }
  save(){
    this.movieService.getRemoteCustomerPassword(this.customer.phone).subscribe((customer)=>{
      this.password=customer;  
      console.log(customer);
      alert('This is Your Password is'+ " " + this.password.password);
    });
}
  signup(){
    this.router.navigate(['/signup']);
  }
}
