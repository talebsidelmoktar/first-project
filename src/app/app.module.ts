import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { GetCharPipe } from './pipes/get-char.pipe';
import { CommentComponent } from './comment/comment.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { BaseURL } from './shared/baseurl';
import {HttpClientModule} from '@angular/common/http';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    GetCharPipe,
    CommentComponent,
    HomeComponent,
    SigninComponent,
    NotFoundComponent,
    ContactDetailComponent,
    EditContactComponent,
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:'BaseURL', useValue:BaseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
