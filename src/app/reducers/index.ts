import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User } from '../login/user';
import { AuthActionType } from '../login/login.action';
import { Course } from 'src/models/course';
import { CourseActionType } from '../course/course.actions';

type AuthState = {
  loggedIn: boolean;
  user: User
}
type CourseState = {
  course: Course
}
const initialState: AuthState = {
  loggedIn: false,
  user: null
}
const courseInitialState: CourseState = {
  course: null
}

export interface AppState {
  auth: AuthState,
  courses: {},
}

function authReducer(state: AuthState = initialState, action): AuthState {
  switch (action.type) {
    case AuthActionType.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user
      }
    case AuthActionType.LoginFailed:
      return {
        loggedIn: false,
        user: null
      }
    case AuthActionType.LogoutAction:
      return {
        loggedIn: false,
        user: null
      }
    default:
      return state;
  }
}
function courseReducer(state: CourseState = courseInitialState, action): CourseState {
  switch (action.type) {
    case CourseActionType.LoadCourse:
      return {
        course: action.payload.course
      }
    default:
      return state;
  }
}


export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  courses: courseReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
