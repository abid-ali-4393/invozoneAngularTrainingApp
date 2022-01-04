import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';

@NgModule({
  declarations: [
    AddContactComponent,
    EditContactComponent,
    DeleteContactComponent,
    ViewContactComponent,
    ListContactsComponent,
  ],
  imports: [
    CommonModule,
  ],
  bootstrap: [AddContactComponent],
})
export class ContactsModule { }
