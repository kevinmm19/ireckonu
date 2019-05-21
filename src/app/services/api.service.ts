import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { User } from '../types/user';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiURL = 'https://profiles-list.firebaseio.com/Data.json';

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) { }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            return of(result as T);
        };
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiURL)
            .pipe(
                tap(users => users),
                catchError(this.handleError('getUsers', []))
            );
    }
}
