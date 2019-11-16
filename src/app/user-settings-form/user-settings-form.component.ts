import { DataService } from './../data/data.service';
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
  postError: boolean = false;
  postErrorMessage: string = '';

  constructor(private dataService: DataService) { }

  public onSubmit(form: NgForm) {
    if (form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        result => console.log('result: ', result),
        error => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors';
    }
  }

  public onHttpError(error: any) {
    console.log('error: ', error)
    this.postError = true;
    this.postErrorMessage = error.message;
  }

}
