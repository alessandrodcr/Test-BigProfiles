import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { DataService } from "services/data.service";
import {ViewDataService} from "services/view-data.service"
 
const URL = 'http://localhost:8080/api/upload';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {


  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'file'
  });

  reader: FileReader = new FileReader();
  
  lFileTxt :  "";
  ljson : {};

  constructor(private toastr: ToastrService, private data: DataService, private viewData: ViewDataService) { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
      this.reader.readAsText(file._file);
    };

    this.uploader.onCompleteItem = (item: any, status: any) => {
      try {
        this.ljson = JSON.parse(this.lFileTxt);
        console.log(this.ljson);
        if(!this.checkObjHelper(this.ljson)){
          this.toastr.error('ATTENZIONE: Gli oggetti nel file non sono tutti uguali!');
        }else{
          this.data.currentDataSource.subscribe(data => this.ljson = data);
          this.toastr.success('File caricato correttamente!'); 
        }
      } catch (error) {
        this.toastr.error('ATTENZIONE: Il contenuto del file caricato non è un json!'); 
      }
    };

    this.reader.onload = (ev: any) => {
      this.lFileTxt = ev.target.result;      
    };

  }

  checkObjHelper(ljson:any):boolean {
    let isAllEquals = true;
    for(var i=0; i<ljson.length; i++){
      console.log(ljson[i]);
    }
    return isAllEquals;
  }

  newData() {
    console.log("Into new data");
    this.data.changeData(JSON.parse(this.lFileTxt));
    this.viewData.changeViewData(JSON.parse(this.lFileTxt));
  }

  
    
}

