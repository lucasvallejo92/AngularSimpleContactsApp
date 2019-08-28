import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/core/services/contacts/contacts.service';
import { Observable } from 'rxjs';
import { IContact } from 'src/app/core/interfaces/contact.interface';
import { CONTACTS_LIST_LANG } from 'src/assets/lang/en/contacts-list/contacts-list.lang';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts$: Observable<IContact[]>
  resources = CONTACTS_LIST_LANG;
  defaultProfileImg = '../../../assets/icons/user-small/user-small.png';

  constructor(public _contactsService: ContactsService) { }

  ngOnInit() {
  }

  onClick(contact: IContact) {
    this._contactsService.select(contact);
    this._contactsService.detailView = true;
    window.scroll(0,0);
  }

}
