import { Action } from '@ngrx/store';
import { User } from './user';


export enum AuthActionType{
    LoginAction = '[LOGIN] Action',
    LoginFailed = '[LOGIN] Failed',
    LogoutAction = '[LOGOUT] Action'
}

export class Login implements Action{
    readonly type = AuthActionType.LoginAction
    constructor(public payload:{user:User}){}
}
export class Logout implements Action{
    readonly type = AuthActionType.LogoutAction
    constructor(public payload:{user:User}){}
}
export class LoginFailed implements Action{
    readonly type = AuthActionType.LoginFailed
    constructor(public payload:{reason : string}){}
}

export type AuthActionTypes = Login | Logout | LoginFailed;