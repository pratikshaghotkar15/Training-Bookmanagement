import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

 book: Book = new Book();
  submitted = false;

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  newBook(): void {
    this.submitted = false;
    this.book = new Book();
  }

  save() {
    this.bookService
    .createBook(this.book).subscribe(data => {
      console.log(data)
      this.book = new Book();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/books']);
  }

}
