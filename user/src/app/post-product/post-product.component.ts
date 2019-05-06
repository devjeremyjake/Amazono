import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.scss']
})
export class PostProductComponent implements OnInit {

  product = {
    title: '',
    price: 0,
    categoryId: '',
    description: ''
    // product_picture: null
  };

  categories: any;
  btnDisabled = false;

  constructor(private data: DataService, private rest: RestApiService) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get (
        'http://localhost/api/categories'
      );
      data['success']
      ? (this.categories = data['categories'])
      : this.data.error(data['message']);
    }catch (error) {
      this.data.error(error['message']);
    }
  }

}
