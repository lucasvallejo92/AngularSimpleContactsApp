import { Component } from '@angular/core';
import { ContactsService } from './core/services/contacts/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebProgrammingChallenge';

  constructor(public _contactsService: ContactsService) {
    this._contactsService.fetch();
  }
}
