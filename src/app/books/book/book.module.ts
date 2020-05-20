import { BookComponent } from './book.component';
import { BookRoutingModule } from './book-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        BookRoutingModule
    ],
    exports: [],
    declarations: [BookComponent],
    providers: [],
})
export class BookModule { }
