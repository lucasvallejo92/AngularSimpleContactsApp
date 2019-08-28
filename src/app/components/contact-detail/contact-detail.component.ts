import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/core/services/contacts/contacts.service';
import { CONTACT_DETAIL_LANG } from 'src/assets/lang/en/contact-detail/contact-detail.lang';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  resources = CONTACT_DETAIL_LANG;
  defaultProfileImg = '../../../assets/icons/user-large/user-large.png';
  faChevronLeft = faChevronLeft;

  constructor(public _contactsService: ContactsService) { }

  ngOnInit() {
  }

  back() {
    this._contactsService.detailView = false;
  }

}
