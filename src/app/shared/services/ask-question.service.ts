import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
const QNA_ENDPOINT ="<insert your endpoint>";
const corsProxy = "<insert your proxy>";
import Axios from "axios";

@Injectable({
  providedIn: "root"
})
export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable()
export class AskQuestionService {

  conversation = new BehaviorSubject<Message[]>([]);

  constructor(private http: HttpClient) {}

  update(msg: Message) {
    this.conversation.next([msg]);
  }

  converse(msg: string, fileContent: string) {
    const userMessage = new Message(msg, "user");
    this.update(userMessage);

    console.log("Inside of a service" + fileContent);

    return Axios.post(corsProxy + QNA_ENDPOINT, {
      input_text: fileContent ,
      question: msg
    }).then(response => {
      const prediction = response.data;
      const botMessage = new Message(prediction["Answer"], "bot");
      this.update(botMessage);
    });
  }
}
