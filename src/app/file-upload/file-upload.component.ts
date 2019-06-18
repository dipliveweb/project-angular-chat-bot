import { Component, AfterViewInit, OnInit } from "@angular/core";
import { FileUploadService } from "../shared/services/file-upload.service";
import { Router } from "@angular/router";
import { s3 } from "fine-uploader/lib/core/s3";
import * as AWS from "aws-sdk";

@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.css"]
})
export class FileUploadComponent implements OnInit {
  constructor(private uploadFile: FileUploadService, private router: Router) {}

  //selectedFile: File;
  fileText: string;
  public name: string = "";

  oneFileChanged(event: any): void {
    //this.selectedFile = event.target.files[0].name;
    let reader: any = new FileReader();
    reader.readAsText(event.target.files[0]);

    reader.onload = function() {
      this.fileText = reader.result.toString();
     //// console.log("Inside of File-Upload page" +this.fileText);
      sessionStorage.setItem("fileContent", this.fileText);
	  //console.log("test");
    };

    //this.selectedFile = event.target.files[1].name;
    //this.selectedFile = event.target.files[2].name;
    //this.selectedFile = event.target.files[3].name;
    //this.selectedFile = event.target.files[4].name;

    // let isDone: boolean = true;
    // const AWSService = AWS;
    // const region = "<insert your region here>";
    // const bucketName = "<insert your bucket name>";
    // const IdentityPoolId = "<insert your identity pool id>";
    // const file = event.target.files[0];

    // //Configures the AWS service and initial authorization
    // AWSService.config.update({
    //   region: region,
    //   credentials: new AWSService.CognitoIdentityCredentials({
    //     IdentityPoolId: IdentityPoolId
    //   })
    // });

    // //adds the S3 service, make sure the api version and bucket are correct
    // const s3 = new AWSService.S3({
    //   apiVersion: "2006-03-01",
    //   params: { Bucket: bucketName }
    // });

    // s3.upload(
    //   { Key: file.name, Bucket: bucketName, Body: file, ACL: "public-read" },
    //   function(err, data) {
    //     if (err) {
    //       console.log(err, "there was an error uploading your file");
    //       isDone = false;
    //     }
    //   }
    // );

    // console.log("Check isDone" + isDone);
    // if (isDone) {
    //   this.router.navigate(["./ask-question"]);
    // }

    this.router.navigate(["./ask-question"]);
  }
  ngOnInit() {}
}
