import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StudentInterface } from '../models/StudentInterface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private readonly httpClient:HttpClient) { }

  getAllStudents():Observable<StudentInterface[]>{
    return this.httpClient.get<StudentInterface[]>(environment.apiUrl+'/students').pipe(map(x=>x.filter(y=>y.id)))
  }

  deleteStudent(id:number):Observable<{}>{
    return this.httpClient.delete<StudentInterface[]>(environment.apiUrl+'/students/'+id)
  }

  addStudent(student:StudentInterface):Observable<StudentInterface>{
    return this.httpClient.post<StudentInterface>(environment.apiUrl+'/students/',student)
  }

  updateStudent(student:StudentInterface,id:number):Observable<StudentInterface>{
    return this.httpClient.patch<StudentInterface>(environment.apiUrl+'/students/'+id,student)
  }
}
