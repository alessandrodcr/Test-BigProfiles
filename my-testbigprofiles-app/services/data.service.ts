import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource = new BehaviorSubject([]);
  currentDataSource = this.dataSource.asObservable();

  changeData(data: any) {
    console.log(data);
    data = this.prepareDataSource(data);
    console.log(data);
    this.dataSource.next(data)
  }

  prepareDataSource(lData:any):string[]{
    let lRetArray = [];
    console.log("Into prepare data source");
    var result = Object.keys(lData[0]).map(function(key) {
      console.log(String(key));
      return String(key);
    });  
    lRetArray.push(result);
    return lRetArray[0];
  }

  constructor() { }
}
