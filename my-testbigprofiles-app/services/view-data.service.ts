import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewDataService {

  private viewDataSource = new BehaviorSubject([]);
  private selectedDataSource = new BehaviorSubject([]);
  currentViewDataSource = this.viewDataSource.asObservable();
  currentSelectedDataSource = this.selectedDataSource.asObservable();

  changeViewData(data: any) {
    console.log("changeViewData");
    data = this.prepareViewDataSource(data);
    this.viewDataSource.next(data);
  }

  viewDataInGraphic(data: any){
    console.log("viewDataInGraphic");
    console.log(data);
    this.selectedDataSource.next(data);
  }

  prepareViewDataSource(lData:any):any[]{
    let lRetArray = [];
    console.log("Into prepare data source");
    for(var i=0; i<lData.length; i++){
      var result = Object.keys(lData[i]).map(function(key) {
        return {
          label: key,
          data: lData.map(function(obj) {
            return obj[key];
          })
        };
      });
      
      lRetArray.push(result);

      }
    
    return lRetArray[0];
  }

  constructor() { }
}


