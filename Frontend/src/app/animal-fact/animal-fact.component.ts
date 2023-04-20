import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { Animal, AnimalDB } from '../animal';


@Component({
  selector: 'app-animal-fact',
  templateUrl: './animal-fact.component.html',
  styleUrls: ['./animal-fact.component.css']
})
export class AnimalFactComponent implements OnInit {

   animalName : string ='';

   Animals: Animal[] = [];

   // Animals : ({} as any) as Animal;

   // savedAnimal : AnimalDB[] = [];;
  
    savedAnimal = {} as AnimalDB;
   
    // addAnimal : AnimalDB[] = [];

  constructor(private router: Router, private animalApi : AnimalService, private saveAnimalApi : AnimalService) {

   }

  ngOnInit(): void {  }



  getAnimalList(){
  this.animalApi.GetAnimal(this.animalName).subscribe((result : Animal[]) => {
    console.log(result);    
    this.Animals = result;
    // this.Animals = result.sort(() => Math.random() - 0.5);
  })
}

  saveAnimal(i : number) {


    

      let animals = this.Animals[i];
      
      console.log(animals);

      let addAnimal = {} as AnimalDB;

      addAnimal.name = animals.name;




      addAnimal.location = animals.characteristics.location; 
      
      
      addAnimal.habitat = animals.characteristics.habitat;
      addAnimal.lifespan = animals.characteristics.lifespan;
      addAnimal.biggest_threat = animals.characteristics.biggest_threat;
      addAnimal.diet = animals.characteristics.diet;

      // this.savedAnimal(addAnimal);

      this.saveAnimalApi.addAnimal(addAnimal).subscribe()
      }
}







