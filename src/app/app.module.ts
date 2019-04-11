import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import{AskQuestionService, Message} from './shared/services/ask-question.service';

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    AskQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AskQuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
