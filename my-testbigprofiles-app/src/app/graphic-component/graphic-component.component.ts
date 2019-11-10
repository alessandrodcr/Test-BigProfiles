import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DataService } from "services/data.service";
import {ViewDataService} from "services/view-data.service"


@Component({
  selector: 'app-graphic-component',
  templateUrl: './graphic-component.component.html',
  styleUrls: ['./graphic-component.component.css']
})
export class GraphicComponentComponent implements OnInit {

  constructor(private data: DataService, private viewData: ViewDataService) { }

  ngOnInit() {
  }

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}
