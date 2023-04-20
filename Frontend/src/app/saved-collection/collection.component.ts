import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { AnimalDB } from '../animal';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  favAnimals: AnimalDB[] = [];


  constructor(private api : AnimalService, private router: Router) {}


  ngOnInit() : void {
    this.loadFavAnimals();
    
  }

  loadFavAnimals() {
    this.api.getFavAnimals().subscribe(
      (data : AnimalDB []) => {
          //  console.log(data);
           this.favAnimals = data;
       }); 
  }

  deleteFavAnimal(id: number) : void {
    console.log(id);
    this.api.deleteFavAnimal(id).subscribe(
      ()=> this.loadFavAnimals());     
  }






}
