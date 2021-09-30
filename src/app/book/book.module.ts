import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookRoutingModule } from './book-routing.module';
// import  {PersonCreateComponent} from  './book-list/person-create.component'
import {BookListComponent} from './book-list/book-list.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component'
import {ReactiveFormsModule} from "@angular/forms";
import { BookShowComponent } from './book-show/book-show.component';
// import {PersonEditComponent} from './person-edit/person-edit.component'

const routes: Routes = [
  {
    path : 'list',
    component : BookListComponent
  },
  {
    path : 'create',
    component : BookCreateComponent
  },
  {
    path : 'edit/:id',
    component : BookEditComponent
  },
  {
    path : 'show/:id',
    component : BookShowComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
  declarations: [
    BookCreateComponent,
    BookEditComponent,
    BookShowComponent
  ]
})
export class BookModule { }
