import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { AnimalFactComponent } from './animal-fact/animal-fact.component';
import { PlantFactComponent } from './plant-fact/plant-fact.component';
import { WeeklyPhotoComponent } from './weekly-photo/weekly-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollectionComponent,
    QuizFormComponent,
    AnimalFactComponent,
    PlantFactComponent,
    WeeklyPhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
