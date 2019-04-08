import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskQuestionComponent }   from './ask-question/ask-question.component';
import { FileUploadComponent }   from './file-upload/file-upload.component';


const routes: Routes = [
  { path: '', redirectTo: '/file-upload', pathMatch: 'full' },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'ask-question', component: AskQuestionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
