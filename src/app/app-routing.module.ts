import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { authGuard } from './guards/auth.guard';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {path:"", component:HomeComponent, canActivate:[authGuard]},
  {path:"about", component:AboutComponent,canActivate:[authGuard]},
  {path:"contacts", component: ContactsComponent,canActivate:[authGuard]},
  {path:"contacts/edit", component: EditContactComponent,canActivate:[authGuard]},
  {path:"contacts/:id", component: ContactDetailComponent,canActivate:[authGuard]},
  { path: 'posts', component: PostListComponent },
  {path:"signin", component: SigninComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
