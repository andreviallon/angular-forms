import { UserSettings } from './../data/user-settings';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent {

  userSettings: UserSettings = {
    name: 'Andre',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annually',
    notes: 'some notes...'
  }

}
