import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books:Book[]=[];

  constructor(private http: HttpClient,
              private bookService:BookService) {
  }


  getBook() {
    this.http.get<Book[]>('http://localhost:3000/books').subscribe((data) => {
      this.books = data;
    })
  }

}
