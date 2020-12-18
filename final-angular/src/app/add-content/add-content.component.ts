import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../HelperFiles/content-interface';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  @Output() newProductEvent = new EventEmitter<Content>();
  newProduct: any;
  productList: Content[];
  constructor(private contentService: ContentService) {
    this.newProduct = {
      barcode: 0,
      brand: '',
      department: '',
      stock: 0
    };
  }

  ngOnInit(): void {
  }

  addProduct(): void {
    let newProductFromServer: Content;
    this.contentService.addProduct(this.newProduct).subscribe(serverProduct => {
      newProductFromServer = serverProduct;
      this.newProductEvent.emit(newProductFromServer);
    });
  }
  addProductToList(newGameFromChild: Content): void {
    this.productList.push(newGameFromChild);
    this.productList = Object.assign([], this.productList);
  }
}
