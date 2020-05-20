import { BookListComponent } from './book-list.component';
import { BooksRoutingModule } from './books-list-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        BooksRoutingModule
    ],
    exports: [],
    declarations: [BookListComponent],
    providers: [],
})
export class BookListModule { }

