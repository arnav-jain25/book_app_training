import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  dataUrl = 'http://localhost:3000/books'

  getbookDataAPI(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.dataUrl)
  }

  getBookById(id: number): Observable<Book> {
    let url = this.dataUrl + '/' + id
    return this.httpClient.get<Book>(url);
  }

  addBook(bookEntry: Book) {
    return this.httpClient.post(this.dataUrl, bookEntry)
  }

  editBook(bookEntry: Book) {
    let editUrl = this.dataUrl + '/' + bookEntry.id
    return this.httpClient.put(editUrl, bookEntry)
  }
  deleteBook(bookId: number) {
    let delUrl = this.dataUrl + '/' + bookId;
    return this.httpClient.delete(delUrl)
  }

}
