import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Book';
import { ActivatedRoute } from '@angular/router';

import { BooksService } from '../books.service';

@Component({
  selector: 'app-bms',
  templateUrl: './bms.component.html',
  styleUrls: ['./bms.component.css']
})
export class BmsComponent implements OnInit {

  bookData: Book[] = []

  constructor(private bookService: BooksService,
    private router: Router) { }

  ngOnInit(): void {
    this.bookService.getbookDataAPI().subscribe(data => this.bookData = data)
  }

  // addData() {
  //   let bk = { "id": 7, "title": "abcd", "author": "xyz", "copies": 6532 }
  //   this.bookService.addBook(bk).subscribe(b => { this.ngOnInit() })
  // }

  editData(bookObj: any) {
    console.log('Edit Button clicked ' + bookObj.id);
    let id = bookObj.id;
    this.router.navigate(['bms/' + id]);

    //let bk = { "id": 1, "bTitle": "Tile", "bAuthor": "Author", "bCopies": 765423 }
    //this.bookService.editBook(bk).subscribe(bk => { this.ngOnInit() })
  }

  addData(bookObj: any) {
    console.log('Add Button clicked ' + bookObj.id);
    let id = bookObj.id;
    this.router.navigate(['bms/' + id]);
  }

  deleteData(bookId:number) {
    console.log('Delete Button clicked');
    this.bookService.deleteBook(bookId).subscribe(bk => { this.ngOnInit() })
  }
}
