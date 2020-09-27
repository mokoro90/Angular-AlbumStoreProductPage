import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { map } from 'rxjs/add/operator/map';
import {Album } from  './album'
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

@Injectable()
export class ProductService {

  private _productsUrl = '../assets/products.json';

  constructor(private _http: Http) { }

  private _albumUrl : string = '../assets/album.json';

  public getAlbum (id : number) : Observable<Album> {

    return this._http.get(this._albumUrl).map(response => <Album>response.json() );
  }

  public getProducts() : Observable<Product[]>{

    return this._http.get(this._productsUrl).map(response => <Product[]>response.json());
     
  }

}
