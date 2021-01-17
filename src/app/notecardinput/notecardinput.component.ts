import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notecardinput',
  templateUrl: './notecardinput.component.html',
  styleUrls: ['./notecardinput.component.css']
})
export class NotecardinputComponent implements OnInit {
  note: any = [];
  @Output() noteToAdd: any = new EventEmitter();

  addNote(){
    this.noteToAdd.emit( this.note );
    this.note.noteContent = "";
    this.note.categorie = "";
  };

  constructor() { }

  ngOnInit(): void {
  }

}
