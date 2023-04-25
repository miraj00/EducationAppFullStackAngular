import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { Animal, AnimalDB } from '../animal';
import { Picture } from '../animalphoto';

@Component({
  selector: 'app-animal-fact',
  templateUrl: './animal-fact.component.html',
  styleUrls: ['./animal-fact.component.css']
})

export class AnimalFactComponent implements OnInit {

  animalName: string = '';
  Animals: Animal[] = [];
  savedAnimal = {} as AnimalDB;
  Pictures = ({} as any) as Picture;

  constructor(private router: Router, private animalApi: AnimalService, private pictureApi: AnimalService, private saveAnimalApi: AnimalService) {

  }

  ngOnInit(): void { }

  getAnimalList() {
    this.animalApi.GetAnimal(this.animalName).subscribe((result: Animal[]) => {
      console.log(result);
      this.Animals = result;
    })
  }

  displayPicture() {

    this.pictureApi.GetAnimalPicture(this.animalName).subscribe((result: Picture) => {
      console.log(result);
      this.Pictures = result;
    })
    console.log(this.Pictures);
  }

  saveAnimal(i: number) {

    let animals = this.Animals[i];

    console.log(animals);

    let addAnimal = {} as AnimalDB;

    addAnimal.name = animals.name;

    addAnimal.location = animals.characteristics.location;
    addAnimal.habitat = animals.characteristics.habitat;
    addAnimal.lifespan = animals.characteristics.lifespan;
    addAnimal.biggest_threat = animals.characteristics.biggest_threat;
    addAnimal.diet = animals.characteristics.diet;

    this.saveAnimalApi.addAnimal(addAnimal).subscribe()
  }

}







