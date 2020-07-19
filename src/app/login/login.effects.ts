import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { Login, AuthActionType, Logout } from './login.action';
import { tap } from 'rxjs/operators';


@Injectable()
export class LoginEffects {

  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionType.LoginAction),
    tap(action => localStorage.setItem('user', JSON.stringify(action['user'])))
  )

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionType.LogoutAction),
    tap(() => localStorage.removeItem('user'))
  )


  constructor(private actions$: Actions) { }

}
