import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../../interfaces/contact.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private options = { headers: { 'Access-Control-Allow-Origin': '*' }};
  public contacts: IContact[];
  public contact: IContact;
  public favLastIndex: number;
  public otherLastIndex: number;
  public detailView = false;

  constructor(private _http: HttpClient) { }

  private sort(contacts$: Observable<IContact[]>) {
    const sub = contacts$.subscribe(contacts => {
      if (contacts) {
        this.contacts = contacts.sort((a, b) => (a.name > b.name) ? 1 : -1);
        this.getLastIndex();
      }
      sub.unsubscribe();
    });
  }

  fetch(): void {
    const contacts$ = this._http.get<IContact[]>(environment.endpoints.contacts, this.options);
    this.sort(contacts$);
  }

  select(contact: IContact): void {
    this.contact = contact;
  }

  getLastIndex() {
    this.favLastIndex = 0;
    this.otherLastIndex = 0;
    let i = 0;
    this.contacts.forEach(contact => {
      if (contact.isFavorite) {
        this.favLastIndex = i;       
      } else {
        this.otherLastIndex = i; 
      }
      i++;
    });
  }

  setUnsetFavourite(id: string) {
    this.contacts.forEach(el => {
      if (el.id === id) {
        el.isFavorite = !el.isFavorite;
      }
    });
    this.getLastIndex();
  }

}
