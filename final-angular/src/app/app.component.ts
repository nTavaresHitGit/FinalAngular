import { Component } from '@angular/core';
import {PRODUCTLIST} from './HelperFiles/contentDB';
import {Content} from './HelperFiles/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nicks Hardware';

  constructor() {

  }

}
