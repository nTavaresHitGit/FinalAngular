import { Injectable } from '@angular/core';
import {Content} from '../HelperFiles/content-interface';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {PRODUCTLIST} from '../HelperFiles/contentDB';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(): object {
    const content: Content[] = PRODUCTLIST;
    return { content };
  }
  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c => c.contentId)) + 1 : 2000;
  }
}
