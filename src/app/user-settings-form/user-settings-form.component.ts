import { UserSettings } from './../data/user-settings';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss']
})
export class UserSettingsFormComponent {

  userSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  }

}
