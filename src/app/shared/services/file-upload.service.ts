import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

    uploadFileToServer(file){
        console.log("Inside of service");
        return this.http.post('my-backend.com/file-upload', file, {
        reportProgress: true,
        observe: 'events'
      })
    }
    
  constructor(private http: HttpClient) { }
}
