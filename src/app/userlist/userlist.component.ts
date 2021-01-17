import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  newName: string = "";
  users: string[];
  activeUser: number;
  selectedItem: any;
  //userNotes: string[];
  @Output() selectedUserName: EventEmitter<any> = new EventEmitter<any>();

  constructor(private apiService: ApiService) {}


  ngOnInit() {
    // vraag de initiële lijst van gebruikers op
    this.apiService.getUsers().subscribe((data: string[]) => {
      this.users = data;
    });
  }

  addUser = () => {
    this.apiService.addUser(this.newName).subscribe((result: any) => {
      let error = result.error;

      if (error) {
        console.log(`Error: ${error}`);
      } else {
        this.newName = "";
        this.apiService.getUsers().subscribe((data: string[]) => {
          this.users = data;
        });
      }
    });
  };

  deleteUser = ( ) => {
    this.apiService.deleteUser(this.selectedItem.name).subscribe((result: any) => {
      this.apiService.getUsers().subscribe((data: string[]) => {
        this.users = data;
      });
    });
  };

  getUserNotes = (name: string) => {
    this.apiService.getNotes(name).subscribe((notes: any) => {
      console.log( "resultaat:");
      console.log(  notes );
      //this.userNotes = notes;
    });
  }

  public pickDate(date: any): void {
    this.selectedUserName.emit(date);
}

  listClick(event, selectedUser) {
    this.selectedItem = selectedUser;
    this.selectedUserName.emit(selectedUser.name);
    //this.getUserNotes( this.selectedItem.name );
  }

}
