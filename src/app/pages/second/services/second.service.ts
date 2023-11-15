import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecondService {

constructor(private http: HttpClient) { }

  getExample = () => {
    return this.http.get('assets/example.json').pipe(res => res)
  }

}

