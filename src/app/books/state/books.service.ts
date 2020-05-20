import { BooksQuery } from './books.query';
import { BooksStore } from './books.store';
import { HttpClient } from '@angular/common/http';
import { ID } from '@datorama/akita/lib';
import { Injectable } from '@angular/core';
import { books } from 'src/app/books.data';
import { mapTo } from 'rxjs/operators';
import { timer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BooksService {

  constructor(
    protected booksStore: BooksStore,
    private booksQuery: BooksQuery
  ) {
  }

  get() {
    timer(1000).pipe(mapTo(books))
    .subscribe(data => {
      this.booksStore.set(data);

      const storeValuekey = 'storeValue';
      const entitieskey = 'storeValue';
      console.log(this.booksStore[storeValuekey][entitieskey]);
    });
  }

  getBook(id: ID){
    if (this.booksQuery.hasEntity(id)) {
      return this.booksQuery.selectEntity(id);
    }
  }

}
