import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { DataService } from "services/data.service";
import {ViewDataService} from "services/view-data.service"

@Component({
  selector: 'app-coordinate-component',
  templateUrl: './coordinate-component.component.html',
  styleUrls: ['./coordinate-component.component.css']
})
export class CoordinateComponentComponent implements OnInit {

  constructor(private data: DataService, private viewData: ViewDataService) { }


  dataSource: {};
  viewDataSource: string[];
  optionXSelected: "";
  optionYSelected: "";
  dataSelected: {x:{}, y:{}};

  ngOnInit() {
    this.data.currentDataSource.subscribe(dataSource => this.dataSource = dataSource);
    this.viewData.currentViewDataSource.subscribe(viewDataSource => this.viewDataSource = viewDataSource);

  }

  onChangeEvent($event){
    console.log(this.dataSource);
    console.log(this.viewDataSource);
    console.log(this);
    if($event.target.id == "selectXAxys"){
      this.optionXSelected = $event.target.value;
      this.dataSelected.x = this.getDataOption(this.optionXSelected, this.viewDataSource);
      console.log(this.optionXSelected);
    }else{
      this.optionYSelected = $event.target.value;
      console.log(this.optionYSelected);
      this.dataSelected.y = this.getDataOption(this.optionYSelected, this.viewDataSource);

    }

  }

  getDataOption(lOption:string, lViewData:string[]):any{
    var lDataObj = {};

    for(var i=0; i<lViewData.length; i++){
      if(lOption == lViewData[i].label){
        lDataObj = lViewData[i];
      }
    }
    console.log(lDataObj);
    return lDataObj;
  } 

  viewDataInGraphic(){
    this.viewData.changeViewData(this.dataSelected);
  }




}
