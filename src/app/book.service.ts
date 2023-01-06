import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/books';

  constructor(private http: HttpClient) { }
  
  createBook(book: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, book);
  }
  
  getBooksList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  
  getBook(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
    updateBook(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
