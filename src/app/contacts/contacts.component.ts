import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../shared/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts:Contact[]=[];
  constructor(private contactService:ContactService, 
              private router:Router){}
  ngOnInit(): void {
    //this.contacts=this.contactService.getContacts();
    this.contactService.getContacts()
    .subscribe({next:(contacts)=>{this.contacts=contacts;/*this.isWaiting=false;*/},
                 error:(errmess)=>{this.contacts=[];
                                   /*this.errMess=<any>errmess;this.isWaiting=false;*/},
                 });  
  }
  onDeleteContactById(id:number){
    // this.contactService.deleteContactById(id);
    this.contactService.deleteContactById(id).subscribe(
      {next:(result)=> {console.log("contact deleted!");
                let index = this.contacts.findIndex(contact => contact.id == id)
                this.contacts.splice(index, 1);}
      }
  );

  }
   onAddContact(){
       this.router.navigateByUrl("/contacts/edit");
   }
}
