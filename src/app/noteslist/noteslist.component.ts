import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-noteslist',
  templateUrl: './noteslist.component.html',
  styleUrls: ['./noteslist.component.css']
})
export class NoteslistComponent implements OnInit {
  @Input() notes: string[];
  noteToAdd: any = [];
  @Input() selectedUserName: string = "";
  @Input() categories: any[];
  searchText = '';
  userCategories: any;
  categoryFilter ='';

  constructor(private apiService: ApiService) { }

  ngOnInit(){

  }

  addNoteToUser( event ){
    this.noteToAdd = event;
    this.addNote();
    console.log( "categorienaam: " + this.noteToAdd.categorie);
  }


  onDeleteClick( note ){
    this.deleteNote( note );
  }

  updateNote( note ){
    //this.deleteNote( note );
  }

  addNote = ( ) => {
    this.apiService.addNote( this.selectedUserName ,this.noteToAdd.noteContent, this.noteToAdd.categorie ).subscribe((result:any) => {
      let error = result.error;
      if(error){
        console.log(`Error: ${error}`);
      } else {
        this.apiService.getNotes(this.selectedUserName).subscribe((notes: any) => {
          this.notes = notes;
        });
      }
    })
  }

  deleteNote = ( note ) => {
    this.apiService.deleteNote( note.id ).subscribe((result: any) => {
      this.apiService.getNotes(this.selectedUserName).subscribe((notes: any) => {
        this.notes = notes;
      });
    });
  };

}
