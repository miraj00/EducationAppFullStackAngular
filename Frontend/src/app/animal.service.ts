import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})

export class AnimalService {

    url : string = "https://api.api-ninjas.com/v1/animals?name=";
    headers = new HttpHeaders()
                .set ('X-Api-Key', 'XexY1kevsTsVw5UJMv7/GQ==Ve0sxQjJVG7pBGbf');

  constructor(private http: HttpClient) { }

  GetAnimal(animal: string) : Observable <Animal[]>{

    return this.http.get<Animal[]>(this.url +animal, { 'headers': this.headers });
  }

}

