import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Notes from './notes';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  baseURL : String = `http://localhost:8080/notes`;

  constructor(private http: HttpClient) { }


   getAllNotess(): Observable <Notes[]>{
    console.log(this.http.get<Notes[]>(`${this.baseURL}`));
     return this.http.get<Notes[]>(`${this.baseURL}`);
   };
   
   
   
   addNotes(newNotes : Notes) : Observable <Notes> {
     return this.http.post<Notes>(`${this.baseURL}`, newNotes);
   };
   
   
   deleteNotes(id: number) : Observable<void> {
     return this.http.delete<void>(`${this.baseURL}/${id}`);
   }
   
   getNotesDetail(id: number) {
     return this.http.get<Notes>(`${this.baseURL}/${id}`);
   }
   
   
   putNotes(id: number, value: any): Observable<object> {
     return this.http.put(`${this.baseURL}/${id}`, value);
   }





}
