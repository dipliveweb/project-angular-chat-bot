import { Component, OnInit,Input } from '@angular/core';
import{FileUploadComponent} from '../file-upload/file-upload.component';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
    
result:string = "";

@Input('name') masterName: string;

 onSave(){
     //service code goes here
     console.log("inside of ask-question");
     this.result = "You result is ....... "; 
 }    
    
  constructor() { }

  ngOnInit() {
  }

}
