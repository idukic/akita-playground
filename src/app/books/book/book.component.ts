import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Book } from '../state/book.model';
import { BooksQuery } from '../state/books.query';
import { BooksService } from '../state/books.service';
import { BooksStore } from '../state/books.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, OnDestroy {

  constructor(
    private service: BooksService,
    private query: BooksQuery,
    private store: BooksStore,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public booksSubscription: Subscription;
  public currentId: string = this.route.snapshot.paramMap.get('id');
  public currentBook: Book = null;

  ngOnInit(): void {
    this.getCurrentBook();
  }

  public async getCurrentBook() {
    if (this.service.getBook(this.currentId) !== undefined) {
      await new Promise(resolve => {
        this.booksSubscription = this.service.getBook(this.currentId)
          .subscribe(
            (book: Book) => {
              this.currentBook = book;
              resolve();
            });
      });
    } else {
      this.service.get();
      await new Promise(resolve => {
        this.booksSubscription = this.query.selectEntity(this.currentId)
          .subscribe(
            (book: Book) => {
              this.currentBook = book;
              resolve();
            });
      });
    }
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }

}
