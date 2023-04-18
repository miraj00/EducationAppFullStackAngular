import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { Animal } from '../animal';


@Component({
  selector: 'app-animal-fact',
  templateUrl: './animal-fact.component.html',
  styleUrls: ['./animal-fact.component.css']
})
export class AnimalFactComponent implements OnInit {

   animalName : string ='';

  //  Animal: Animal[] = [];

   Animal=({} as any) as Animal;


  constructor(private router: Router, private animalApi : AnimalService) { }

  ngOnInit(): void {
  }
  // onSubmit(form: NgForm){
  //   this.router.navigate(['search', form.value.search]);
  // }


  getAnimalList(){
  this.animalApi.GetAnimal(this.animalName ).subscribe((result : Animal) => {
    console.log(result);
    this.Animal = result;
  })
}


}
