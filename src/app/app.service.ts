import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable()
export class AIService {
  constructor(private http: HttpClient) { }

  apiUrl = "http://localhost:5000/";

  classifyQuestion(question) {
    let params = new HttpParams();
    params = params.append('question', question);
    return this.http.get(this.apiUrl, {params});
  }
}
