import { UserSettings } from './../data/user-settings';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  public onSubmit(form: NgForm) {
    console.log(form.valid);
  }

}
