import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../Book';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {


  book: Book = new Book();

  constructor(private route: ActivatedRoute, private bookService: BooksService) { }

  ngOnInit(): void {

    let obj = this.route.snapshot.paramMap.get('id');
    let bookId = obj != null ? parseInt(obj) : -1;

    this.bookService.getBookById(bookId).subscribe(b => this.book = b);

    // Call Service to get Book obj by its id

    // and fill book details in Html Form conrolls
  }

  updateBook(book: Book) {
    console.log(book);
    this.bookService.editBook(book)
      .subscribe(data => {
        console.log('Data Updated Successfully');
        window.location.href='/bms';
      });

  }
}
