import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Book} from "../../model/book";

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {
  bookForm!: FormGroup;
  id!: number;
  constructor(private activatedRoute: ActivatedRoute,
              private http :HttpClient,
              private router :Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(<string>paramMap.get('id'));
      this.getBook(this.id);
    }); }

  ngOnInit(): void {
  }
  getBook(id: number) {
    this.http.get<Book>(`http://localhost:3000/books/${id}`).subscribe((data) => {
      this.bookForm = new FormGroup({
        title: new FormControl(data.title),
        id: new FormControl(data.id),
        author: new FormControl(data.author),
        description: new FormControl(data.description),
      });
    })
  }
}
