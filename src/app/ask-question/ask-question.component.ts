import { Component, OnInit,Input } from '@angular/core';
import{FileUploadComponent} from '../file-upload/file-upload.component';
import{AskQuestionService, Message} from '../shared/services/ask-question.service';

import {Observable, BehaviorSubject} from "rxjs";
import { scan } from 'rxjs/operators'

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
    
    messages: Observable<Message[]>;
    formValue: string;
    
  constructor(private askQuestion: AskQuestionService) { }

  ngOnInit() {
      //this.askQuestion.talk();
    this.messages = this.askQuestion.conversation.asObservable()
      .pipe(
        scan((acc, val) => acc.concat(val))
      )
  }
    
  sendMessage(){
      this.askQuestion.converse(this.formValue);
      this.formValue = '';
  }

}
