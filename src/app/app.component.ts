import { Component } from '@angular/core';
import { AIService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AIService]
})
export class AppComponent {
  constructor(private aiService: AIService) { }
  title = 'genre-classifier-frontend';
  question:string = '';
  answer:string = '';
  classes = [
    'Arts & Entertainment & Culture',
    'Economy & Business & Financial', 
    'Politics',
    'Science & Technology',
    'Sport'
  ];

  onSubmit() {
    this.aiService.classifyQuestion(this.question).subscribe(data => this.answer = String(data));
    console.log(this.answer);
  }
}
