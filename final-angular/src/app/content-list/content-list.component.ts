import {Component, Input, OnInit} from '@angular/core';
import {Content} from '../HelperFiles/content-interface';
import {PRODUCTLIST} from '../HelperFiles/contentDB';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @Input() product: Content;
  productsList: Content[];
  constructor(private contentService: ContentService) {
    this.productsList = PRODUCTLIST;
  }

  ngOnInit(): void {
    this.productsList = [];
    this.getTheProductList();
  }
  getTheProductList(): void{
    this.contentService.getProducts().subscribe(pl => {
      // content came back! maybe log the length
      this.productsList = pl;
    });
  }
}
