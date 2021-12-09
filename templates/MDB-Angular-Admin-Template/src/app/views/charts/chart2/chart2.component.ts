import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements OnInit {
  public chart1Type = 'line';
  public chart2Type = 'radar';
  public chart3Type = 'bar';

public chartDatasets: Array<any> = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: '#1'},
  {data: [28, 48, 10, 69, 36, 37, 110], label: '#2'},
  {data: [38, 58, 30, 79, 26, 37, 20], label: '#3'},
  {data: [48, 68, 20, 89, 76, 27, 40], label: '#4'},
  {data: [58, 78, 50, 49, 46, 17, 90], label: '#5'}
];

public chart1Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

// Nie wiem czy jest sens generowac kolory czy zostawic puste - wtedy sam bedzie sobie generował
public chartColors: Array<any> = [
  {
      backgroundColor: 'rgba(220,220,220,0.2)',
      borderColor: 'rgba(220,220,220,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(220,220,220,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220,220,220,1)'
  },
  {
      backgroundColor: 'rgba(151,187,205,0.2)',
      borderColor: 'rgba(151,187,205,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(151,187,205,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(151,187,205,1)'
  }
];



public chartOptions: any = {
  responsive: true
};

  constructor() { }

  ngOnInit() {
  }

}
