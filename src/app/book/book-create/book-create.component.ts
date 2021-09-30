import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  books:Book[]=[];
  constructor(private http : HttpClient,
              private router: Router) { }

  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    author: new FormControl('',Validators.minLength(6)),
    title : new FormControl('',Validators.required),
    description : new FormControl()
  })

  ngOnInit(): void {
  }

  submit() {
    this.http.post<Book>('http://localhost:3000/books', this.bookForm.value).subscribe((data) => {
      alert("create thành công - " + data.title)
      this.router.navigate(['/book/list']);
    })
  }
}
