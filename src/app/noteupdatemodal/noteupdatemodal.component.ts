import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-noteupdatemodal',
  templateUrl: './noteupdatemodal.component.html',
  styleUrls: ['./noteupdatemodal.component.css']
})
export class NoteupdatemodalComponent {
  @Input() note: any;

  constructor(private apiService: ApiService) {}

  updateNote = () => {
    console.log('updating note with id: ' + this.note.id);
    this.apiService.updateNote( this.note.id, this.note.content, this.note.category );
  };

}
