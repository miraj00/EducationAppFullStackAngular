import { NgModule } from '@angular/core';
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



const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"", component: HomeComponent},
  

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
    NotesComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [ RouterModule ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
