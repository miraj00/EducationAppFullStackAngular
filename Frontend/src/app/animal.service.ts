import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from './animal';
import { AnimalDB } from './animal';

@Injectable({
  providedIn: 'root'
})

export class AnimalService {

    url : string = "https://api.api-ninjas.com/v1/animals?name=";
    headers = new HttpHeaders()
                .set ('X-Api-Key', 'XexY1kevsTsVw5UJMv7/GQ==Ve0sxQjJVG7pBGbf');


    baseURL : String = `http://localhost:8080/animals`;


  constructor(private http: HttpClient) { }

  GetAnimal(animal: string) : Observable <Animal[]>{

    return this.http.get<Animal[]>(this.url +animal, { 'headers': this.headers });
  }


 
  addAnimal(newAnimal : AnimalDB[]) : Observable <AnimalDB[]> {
    return this.http.post<AnimalDB[]>(`${this.baseURL}`, newAnimal);
  };



 getFavAnimals(): Observable <AnimalDB[]>{
  console.log(this.http.get<AnimalDB[]>(`${this.baseURL}`));
   return this.http.get<AnimalDB[]>(`${this.baseURL}`);
 };
 
 

 
 
 deleteFavAnimal(id: number) : Observable<void> {
   return this.http.delete<void>(`${this.baseURL}/${id}`);
 }
 

}



