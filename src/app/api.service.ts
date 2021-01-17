import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  endpointUrl: string = "https://experienced-icy-canary.glitch.me"; "http://192.168.0.16:8081"; 
  

  getUsers = () => {
    return this.http.get( this.endpointUrl + '/users');
  }

  addUser = (name: string) => {
    let data = { 'name': name };
    return this.http.post( this.endpointUrl + '/users', data);
  }

  deleteUser = (name: string) => {
    // Delete parameters meegeven onder 'options' > 'params'
    let options = {
      'params': { 'name': name }
    };
    return this.http.delete(
      this.endpointUrl + '/users', options
    );
  }

  addNote = (name: string, content: string, category: string) =>{
    let noteData = { 
        'name': name, 
        'content': content,
        'category':category 
    };

      return this.http.post(
        this.endpointUrl + '/addnote', noteData
        
      );
  }

  getNotes = ( username: string ) => {
    let userNameData = {
      'params':{
        'name' : username,
      }
    }
    return this.http.get( this.endpointUrl + '/notes', userNameData);
  }


  getUserCategories = (username: string) => {
    let userNameData = {
      'params':{
        'name':username,
      }
    }
    return this.http.get( this.endpointUrl + '/categories', userNameData );
  }


  deleteNote = ( noteId: string ) => {
    console.log( 'deleting note with id: ' + noteId);
    let options = {
      'params': { 'noteid': noteId }
    };
    return this.http.delete(
      this.endpointUrl + '/removenote', options
    );
  }

  updateNote = ( noteId: string, content: string, category: string ) => {
    //console.log('updating note with id: ' + noteId + " and content: " + content + " and category " + category);
    let body = {
      id:noteId,
      content: content,
      category: category
    }

      return this.http.put(  this.endpointUrl + '/notes', body ).subscribe( 
        data  => {
          console.log("PUT Request is successful ", data);
        },
        error  => {
          console.log("Rrror", error);
        } );
    }
  
}
