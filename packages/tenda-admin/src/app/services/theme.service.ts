import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

export const lightTheme = {
  colorBackground: 'white',
  colorBackgroundBody: '#f2f4f7',
  colorText: '#646777',
  colorTextAdditional: '#646777',
  logoImg: 'url(../assets/images/logo/logo_light.png)',
  colorHover: '#fafbfe',
  colorFolderHover: '#f0eeee',
  colorBorder: '#eff1f5',
  colorIcon: '#dddddd',
  imgInvert: 'invert(0%)',
  colorFieldsBorder: '#f2f4f7',
  colorBubble: 'rgba(242, 244, 247, 0.65)',
  colorBubbleActive: 'rgba(234, 238, 255, 0.6)',
  colorScrollbar: '#B4BFD0',
  colorFitness: '#646777',
  colorDisabled: '#dddddd',
};

export const darkTheme = {
  colorBackground: '#232329',
  colorBackgroundBody: '#2a2a31',
  colorText: '#dddddd',
  colorTextAdditional: '#999999',
  logoImg: 'url(../assets/images/logo/logo_dark.png)',
  colorHover: '#38373f',
  colorFolderHover: '#ffffff1A',
  colorBorder: '#333246',
  colorIcon: '#605f7b',
  imgInvert: 'invert(100%)',
  colorFieldsBorder: '#33333a',
  colorBubble: 'rgba(68, 79, 97, 0.65)',
  colorBubbleActive: 'rgba(92, 104, 156, 0.6)',
  colorScrollbar: '#606071',
  colorFitness: '#ffffff',
  colorDisabled: '#dddddd91',
};

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isLightTheme: BehaviorSubject<boolean>;

  toggleDark() {
    this.setTheme(darkTheme);
    this.isLightTheme.next(false);
  }

  toggleLight() {
    this.setTheme(lightTheme);
    this.isLightTheme.next(true);
  }

  getThemeState(): Observable<boolean> {
    return this.isLightTheme.asObservable();
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k => document.documentElement.style.setProperty(`--${k}`, theme[k]));
  }

  constructor() {
    this.isLightTheme = new BehaviorSubject<boolean>(true);
  }
}
