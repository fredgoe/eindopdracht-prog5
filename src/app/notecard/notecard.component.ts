import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent implements OnInit {
  @Input() note; 
  noteUpdate: any = [];
  @Output() deleted = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick = () => {
    this.deleted.emit(this.note);
  }



}
