import { UserSettings } from './user-settings';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(UserSettings: UserSettings): Observable<any> {
    return this.http.post('https://putsreq.com/DeBOyt9WI6oFJjqiD7EW', UserSettings);
    // return of(UserSettings);
  }
}
