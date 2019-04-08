import { Component, OnInit } from '@angular/core';
import {FileUploadService} from '../shared/services/file-upload.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent implements OnInit {
  constructor( private uploadFile: FileUploadService,private router: Router ) { }

 selectedFile: File;
 public name : string ="";
    
  oneFileChanged(event: any):void {
    this.selectedFile = event.target.files[0].name;
    //this.selectedFile = event.target.files[1].name;
    //this.selectedFile = event.target.files[2].name;
    //this.selectedFile = event.target.files[3].name;
    //this.selectedFile = event.target.files[4].name;
   console.log(this.selectedFile);
  }
    
  onUpload():void{
    
    //service code goese here
    /*  this.uploadFile.uploadFileToServer(this.selectedFile)
      .subscribe(event => {
      console.log("inside of component" + event); // handle event here
    });*/ 

    console.log(this.name);
    this.router.navigate(['./ask-question']);
  }    
    
  ngOnInit() {
  }

}
