import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { NoteComponent } from './note/note/note.component';
import { UserlistComponent } from './userlist/userlist.component';
import { NoteslistComponent } from './noteslist/noteslist.component';
import { NotecardComponent } from './notecard/notecard.component';
import { NotecardinputComponent } from './notecardinput/notecardinput.component';
import { NoteupdatemodalComponent } from './noteupdatemodal/noteupdatemodal.component';
import { NotefilterPipe } from './notefilter.pipe';
import { NotecatfilterPipe } from './notecatfilter.pipe';

@NgModule({
  declarations: [AppComponent, UserComponent, NoteComponent, UserlistComponent, NoteslistComponent, NotecardComponent, NotecardinputComponent, NoteupdatemodalComponent, NotefilterPipe, NotecatfilterPipe],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
