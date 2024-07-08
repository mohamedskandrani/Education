import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseUrl: string='http://localhost:3000/api/course';

  constructor(private http:HttpClient) { }
  addcourse(course: any){
    return this.http.post<{isAdded: boolean}>(this.courseUrl,course);}
  editcourse(courseObj: any){
    return this.http.put<{isEdited:string}>(this.courseUrl,courseObj);}
  deletecourse(id: any){
    return this.http.delete<{isDeleted:boolean}>(`${this.courseUrl}/${id}`);}
  //response one object
  getcourseById(id: any){
    return this.http.get<{course:any}>(`${this.courseUrl}/${id}`);}
  getAllcoursees(){
    return this.http.get<{courses:any}>(this.courseUrl);}
}
