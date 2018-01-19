import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.interface';
import {trigger, transition, style, animate, query, stagger, animateChild} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({opacity: 0}),
        animate('2s ease')
      ])
    ]),
    trigger('stagger', [
      transition(':enter', [
        query(':enter', stagger('.5s', [animateChild()]))
      ])
    ])
  ]
})
export class AppComponent implements OnInit{

  loadedPage : boolean = false;
  loadedData : boolean = false;

  products : Product[] = [];
  preloadProducts : Product[] = [];
  counter : number = 0;
  total : number;
  page : number = 1;


  constructor(private loadData: ProductService) {}

  ngOnInit() {
    this.loadData.loadProduct(this.page++, 4)
      .subscribe(res => {
        //console.log(res);
        this.products = res.entities;
        this.total = res.total;
        this.counter += 4;
        //console.log(this.products);
        this.loadedPage = true;

        this.loadData.loadProduct(this.page++, 4)
          .subscribe(res => {
            this.preloadProducts = res.entities;
            this.loadedData = true;
            console.log(this.loadedData);
            /*  console.log("1111");
              console.log(this.products);*/
          });

      });

    /*if(this.loaded) {
      this.loadData.loadProduct(2, 4)
        .subscribe(res => {
          this.products.concat(res.entities);
          console.log("1111");
          console.log(this.products);
        });
    }*/
  }

  loadMore() {
    this.loadedData = false;

    this.products = this.products.concat(this.preloadProducts);
    this.counter += 4;
    console.log(this.products);
    this.loadData.loadProduct(this.page++, 4)
      .subscribe(res => {
        this.preloadProducts = res.entities;
        this.loadedData = true;
      });
  }
}
