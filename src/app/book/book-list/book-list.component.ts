import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:Book[]=[];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.getBook();
  }


  getBook() {
    this.http.get<Book[]>('http://localhost:3000/books').subscribe((data) => {
      this.books = data;
    })
  }

  deleteBook(id: number) {
    var check = confirm("Hành động tiếp theo sẽ thay đổi nội dung, bạn muốn tiếp tục!");
    if(check ==true){
      this.http.delete(`http://localhost:3000/books/${id}`).subscribe((data) => {
        alert("xóa thành công");
        this.getBook();
      })
    }else {
      return;
    }


  }
}
