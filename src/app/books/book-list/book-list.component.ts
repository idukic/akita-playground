import { Component, OnInit } from '@angular/core';

import { BooksQuery } from '../state/books.query';
import { BooksService } from '../state/books.service';
import { BooksStore } from '../state/books.store';

@Component({
  selector: 'app-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(
    private service: BooksService,
    private query: BooksQuery,
    private store: BooksStore
  ) { }

  public books$ = this.query.selectAll({sortBy: 'name'});
  public loading$ = this.query.selectLoading();

  ngOnInit(): void {
    this.getBooks();
  }

  public getBooks() {
    this.service.get();
  }

}
