import { Action } from '@ngrx/store';
import { Course } from 'src/models/course';



export enum CourseActionType{
    LoadCourse = '[COURSE_LOAD] Action',
}

export class LoadCourse implements Action{
    readonly type = CourseActionType.LoadCourse
    constructor(public payload:{course:Course}){}
}



export type CourseActionTypes = LoadCourse