import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private newText = new Subject<string>()

   constructor(private http: HttpClient) { }

   getUsers(): Observable<any> {
    const URL = "https://gorest.co.in/public/v2/users"
    return this.http.get(URL)
   }
 
   getUser(id:any): Observable<any>{
    const URL = "https://gorest.co.in/public/v2/users/" + id
    return this.http.get(URL)
   }
  // modifyText(text: string): void {
  //   this.newText.next(text)
  // }

  // getText(): Observable<string> {
  //   return this.newText.asObservable()
  // }
}
