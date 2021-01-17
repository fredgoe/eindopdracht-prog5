import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'userapp';
  users: string[];
  newName: string = "";
  newNoteContent: string = "";
  newNoteCategory: string = "";
  notes: string[];
  selectedUsername: string ="";
  userCategories: any[];

  constructor( private apiService: ApiService ) {}

  ngOnInit() {
    // vraag de initiële lijst van gebruikers op
    this.apiService.getUsers().subscribe((data: string[]) => {
      this.users = data;
    });
  }

  getUserCategories = () => {
    this.apiService.getUserCategories( this.selectedUsername ).subscribe((result: any) => {
      console.log( result );
      this.userCategories = result;
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

  deleteUser = (name: string) => {
    this.apiService.deleteUser(name).subscribe((result: any) => {
      console.log(result);

      this.apiService.getUsers().subscribe((data: string[]) => {
        this.users = data;
      });
    });
  };

  getUserNotes = (name: string) => {
    this.apiService.getNotes(name).subscribe((notes: any) => {
      this.notes = notes;
    });
  }

  public doSomething(username: any):void {
    console.log('selected user: ', username);
    this.selectedUsername = username;
    this.getUserNotes( username );
    this.getUserCategories();
  }

}
