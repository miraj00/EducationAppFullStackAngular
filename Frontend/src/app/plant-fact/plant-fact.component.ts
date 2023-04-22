import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import { Router } from '@angular/router';
import { Plant } from '../plant';

@Component({
  selector: 'app-plant-fact',
  templateUrl: './plant-fact.component.html',
  styleUrls: ['./plant-fact.component.css']
})
export class PlantFactComponent implements OnInit  {

  id : number = 0 ;

//  Plants: Plant[] = [];
 Plants : Plant =({} as any) as Plant;
//  Plants = {} as as Plant;

  constructor(private router: Router, private plantApi : PlantService) {

  }

 ngOnInit(): void {  }


 getPlantList(){
  console.log (this.id);

  this.plantApi.GetPlants(this.id).subscribe((result) => {
    console.log(result);    
    this.Plants = result;  
    console.log(this.Plants);  
  })
}


counterMinus() {
  this.id--;
  this.getPlantList();
}

counterPlus() {
  this.id++;
  this.getPlantList();
}




}
