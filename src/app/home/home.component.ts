import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { Logout } from '../login/login.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private store:Store<AppState>) { }

  ngOnInit(): void {
  }
  logout(){
    this.store.dispatch(new Logout({user : null}))
    localStorage.clear();
    this.router.navigate(['/'])
  }

}
