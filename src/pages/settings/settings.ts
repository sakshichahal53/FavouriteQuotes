import { Component } from '@angular/core';
import { IonicPage, Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsService:SettingsService) {
  }

  onToggle(toggle:Toggle)
  {
        console.log(toggle)
        this.settingsService.setBackGround(toggle.checked)
  }

  checkAltBackground()
  {
    return this.settingsService.isAltBackground()    //to persist the state after restarting
  }

}
