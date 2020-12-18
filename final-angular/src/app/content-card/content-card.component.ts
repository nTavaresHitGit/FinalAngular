import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Content} from '../HelperFiles/content-interface';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
@Input() product: Content;
@Output() deleteProductEvent = new EventEmitter<Content>();
  productList: Content[];
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }
  deleteProduct(): void {
    let deleteProductFromServer: Content;
    this.contentService.deleteProduct(this.product).subscribe(serverProduct => {
      deleteProductFromServer = serverProduct;
      this.deleteProductEvent.emit(deleteProductFromServer);
    });
  }
  deleteProductFromList(deleteGameFromChild: Content): void {
    this.productList.splice(deleteGameFromChild.contentId);
    this.productList = Object.assign([], this.productList);
  }
}
