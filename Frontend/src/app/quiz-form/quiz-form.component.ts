import { Component } from '@angular/core';
import questions from "../questions.json";

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent {

  questions: any = questions;
  i: number = 0;
  question: any = this.questions[this.i];

  totalQuestions = questions.length;

  ngOnInit() {
    console.log(this.questions[0]);
    console.log(this.question);
  }


  answer: any;
  score: any = 0;


  onSelecting(option : string) {
    console.log(option);
    this.answer = option;
  }

  onPrev() {
    --this.i;
    this.question = this.questions[this.i];
  }

  onNext() {
    console.log(this.answer);
    console.log(this.question.answer);



    if ( "4" === this.answer || "Giraffe" === this.answer ||
    "Cheetah" === this.answer || "Zebra" === this.answer ) {
      this.score++;
    }

    console.log("Score : ", this.score);
    // console.log(this.questions);
    console.log("Answer : ", this.answer);
    ++this.i;
    this.question = this.questions[this.i];
    console.log(this.i);
    console.log("Question : ", this.question);
    console.log("on click");
  }
}
