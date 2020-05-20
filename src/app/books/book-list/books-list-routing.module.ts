import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: BookListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BooksRoutingModule { }

