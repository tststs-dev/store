import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  products : Product[] = [];

  constructor(private loadData: ProductService) {}

  ngOnInit() {
    this.loadData.loadProduct(3, 4)
      .subscribe(res => console.log(res));
  }
}
