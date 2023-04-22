import { Injectable } from '@angular/core';
import { Plant } from './plant';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  url : string = "https://perenual.com/api/species/details";
  key = `key=sk-0czm644316c15b4a0599`;


  constructor(private http: HttpClient) { }

  GetPlants(id: number) : Observable <Plant> {
    console.log(this.http.get<Plant>(`${this.url}/${id}`+`?`+`${this.key}`));
    return this.http.get<Plant>(`${this.url}/${id}`+`?`+`${this.key}`);
  
  }


}
