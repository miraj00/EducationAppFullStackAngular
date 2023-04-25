import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from './animal';
import { AnimalDB } from './animal';
import { Picture } from './animalphoto';

@Injectable({
  providedIn: 'root'
})

export class AnimalService {

  url: string = "https://api.api-ninjas.com/v1/animals?name=";
  headers = new HttpHeaders()
    .set('X-Api-Key', 'XexY1kevsTsVw5UJMv7/GQ==Ve0sxQjJVG7pBGbf');

  pictureUrl: string = "https://api.pexels.com/v1/search?query=";
  pictureHeaders = new HttpHeaders()
    .set('Authorization', 'Bv2AHSfVlX8cL7lx9w9gv5Z4VopWrRjuoNNd9tcHJYBIANQdmQ76lqfU');

  baseURL: String = `http://localhost:8080/animals`;


  constructor(private http: HttpClient) { }

  GetAnimal(animal: string): Observable<Animal[]> {

    return this.http.get<Animal[]>(this.url + animal, { 'headers': this.headers });
  }

  GetAnimalPicture(animal: string): Observable<Picture> {
    console.log(this.http.get<Picture>(`${this.url}/${animal}`));
    return this.http.get<Picture>(this.pictureUrl + animal, { 'headers': this.pictureHeaders });
  }

  addAnimal(newAnimal: AnimalDB): Observable<AnimalDB> {
    return this.http.post<AnimalDB>(`${this.baseURL}`, newAnimal);
  };

  getFavAnimals(): Observable<AnimalDB[]> {
    console.log(this.http.get<AnimalDB[]>(`${this.baseURL}`));
    return this.http.get<AnimalDB[]>(`${this.baseURL}`);
  };

  deleteFavAnimal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }

}



