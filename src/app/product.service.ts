import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  loadProduct(page : number, perPage : number) : Observable<any> {
    return this.http.get('https://store-task.000webhostapp.com/list.php?page=' + page + '&per_page' + perPage)
  }
}
