import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {

  constructor( private settingsService: SettingsService ) {}

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this.settingsService.changeTheme( theme )
    
  }

  // checkCurrentTheme() {

  //   const links = document.querySelectorAll('.selector');

  //   links.forEach((elem) => {
  //     elem.classList.remove('working');
  //     const btnTheme = elem.getAttribute('data-theme');
  //     const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
  //     const currentTheme = this.linkTheme?.getAttribute('href');

  //     if (btnThemeUrl === currentTheme) {
  //       elem.classList.add('working');
  //     }

  //   });
  // }
}
