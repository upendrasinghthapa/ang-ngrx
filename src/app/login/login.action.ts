import { Action } from '@ngrx/store';
import { User } from './user';


export enum AuthActionType{
    LoginAction = '[LOGIN] Action',
    LogoutAction = '[LOGOUT] Action'
}

export class Login implements Action{
    readonly type = AuthActionType.LoginAction
    constructor(public payload:{user:User}){}
}
export class Logout implements Action{
    readonly type = AuthActionType.LogoutAction
}

export type AuthActionTypes = Login | Logout;