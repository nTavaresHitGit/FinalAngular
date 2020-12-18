import { Component } from '@angular/core';
import {PRODUCTLIST} from './HelperFiles/contentDB';
import {Content} from './HelperFiles/content-interface';
import {ContentService} from './services/content.service';
import {LogUpdateService} from './services/log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nicks Hardware';

  constructor(private contentService: ContentService,
              private logService: LogUpdateService) {

  }

}
