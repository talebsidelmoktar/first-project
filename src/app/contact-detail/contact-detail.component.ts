import { Component, Inject, OnInit } from '@angular/core';
import { Contact } from '../shared/contact';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
   
   contact:Contact|undefined=new Contact();
   idContact:any
   constructor(private contactService : ContactService,
              private route:ActivatedRoute,
              private router:Router,
              @Inject('BaseURL')public baseUrl:string ){}
   ngOnInit(): void {
    // this.idContact=this.route.snapshot.params["id"];
     this.route.paramMap.subscribe(mpds=>this.idContact=mpds.get("id"))
    // this.contact=this.contactService.getContactById(this.idContact);
     this.contactService.getContactById(this.idContact).subscribe({next:(contact)=>this.contact=contact});
  }

  onContacts(){
    this.router.navigateByUrl('/contacts')
  }
}
