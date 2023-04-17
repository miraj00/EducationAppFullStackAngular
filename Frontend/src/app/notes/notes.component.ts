import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../notes.service';
import Notes from '../notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Output () NotesSave = new EventEmitter<Notes>();
  
  newNotes:Notes = ({} as any) as Notes;

  Notes: Notes[] = [];

  id: number = 0;

  editedNotes:Notes = ({} as any) as Notes;

  myVar: boolean = true;


  constructor(private NotesAPI : NotesService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['id'];

    this.NotesAPI.getNotesDetail(this.id).subscribe(
      (NotesResult) => {
        this.editedNotes=NotesResult;
        // this.NotesInfo = NotesResult;
          // this.loading = false;
       }
  );

  




    this.loadNotes();
  }
  
  addNewNotes(){
    this.NotesAPI.addNotes(this.newNotes).subscribe(
      ()=> {                   
          this.NotesSave.emit(this.newNotes);
          this.newNotes =({} as any) as Notes;
      })
  }


  loadNotes() {  
    this.NotesAPI.getAllNotess().subscribe(
       (data : Notes []) => {
            console.log(data);
            this.Notes = data;
        }); 
  }

  deleteNotes(id: number) : void {
    this.NotesAPI.deleteNotes(id).subscribe(
      ()=> this.loadNotes());     
  }


  getNotebyId(id: number) : void {
  this.NotesAPI.getNotesDetail(id).subscribe(
    (NotesResult) => {
      this.editedNotes=NotesResult;
     });  
   this.myVar = false;
 } 

 returnToNewNotes() {
   this.myVar = true;
 }


 editNotes() {
   console.log(this.editedNotes);
  this.NotesAPI.putNotes(this.id, this.editedNotes)
    .subscribe( data => {
      console.log(data);  
    })
  }
     

onSubmit(){
  this.editNotes();
} 



}
