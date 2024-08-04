import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) { 
    const token = localStorage.getItem('accessToken');
    if(token){
      this.tokenSubject.next(token);
    }
  }

  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  login(username: string, password: string): Observable<any> {
    const payload = { username, password }; 
    console.log('Login payload:', payload);

    return this.http.post<any>(this.apiURL, payload).pipe(
      tap(res => {
        const token = res.token;
        console.log('Received token:', token);
        if (token) {
          localStorage.setItem('accessToken', token);
          this.tokenSubject.next(token);
        }
      })
    );
  }

  getToken(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  isAuthenticated(): Boolean {
    return this.tokenSubject.value !== null;
  }

  logOut(): void {
    localStorage.removeItem('accessToken');
    this.tokenSubject.next(null);
  }
}
