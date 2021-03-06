import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { Login, LoginFailed } from './login.action';
import { LoginService } from '../login.service';
import { noop } from 'rxjs';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private store: Store<AppState>, private loginService: LoginService) { }

  ngOnInit(): void {
  }
  login() {
    this.loginService.login()
      .subscribe(
        (user: User) => {
          this.store.dispatch(new Login({ user }));
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/home'])
        },
        () => {
          this.store.dispatch(new LoginFailed({ 'reason': 'lOGIN FAILDED DUE TO SOME REASON' }));
        }
      )
  }
}
