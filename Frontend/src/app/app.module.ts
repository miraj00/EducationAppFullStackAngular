import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './saved-collection/collection.component';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { AnimalFactComponent } from './animal-fact/animal-fact.component';
import { PlantFactComponent } from './plant-fact/plant-fact.component';
import { WeeklyPhotoComponent } from './weekly-photo/weekly-photo.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotesComponent } from './notes/notes.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactComponent } from './contact/contact.component';
import { QuizComponent } from './quiz/quiz.component';
import { LightboxModule } from 'ngx-lightbox';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"animals", component: AnimalFactComponent},
  {path:"plants", component: PlantFactComponent},
  {path:"quiz", component: QuizComponent},
  {path:"calculator", component: CalculatorComponent},
  {path:"notes", component: NotesComponent},
  {path:"calculator", component: CalculatorComponent},
  {path:"image", component: WeeklyPhotoComponent},
  {path:"contact", component: ContactComponent},
  {path:"favAnimals", component: CollectionComponent},
  {path:"videos", component: VideosComponent},
 
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollectionComponent,
    QuizFormComponent,
    AnimalFactComponent,
    PlantFactComponent,
    WeeklyPhotoComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NotesComponent,
    NavbarComponent,
    CalculatorComponent,
    ContactComponent,
    QuizComponent,
    VideosComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LightboxModule
   
  ],

  exports: [ RouterModule,  MatButtonModule ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
