import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.scss']
})
export class Chart1Component implements OnInit {
  public chart1Type = 'line';
  public chart2Type = 'radar';
  public chart3Type = 'bar';
  public chart4Type = 'polarArea';
  public chart5Type = 'pie';
  public chart6Type = 'doughnut';
// tslint:disable-next-line:max-line-length
// Note that below data are duplicated, it shouldn't be used that way. Purpose of following is keep data clearly binded to each chart separetaly.
public chart1Datasets: Array<any> = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset'}
];
public chart2Datasets: Array<any> = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset'}
];
public chart3Datasets: Array<any> = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset'},
  {data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset'}
];

public chart4Datasets: Array<any> = [300, 50, 100, 40, 120];
public chart5Datasets: Array<any> = [
  {data: [300, 50, 100, 40, 120]}];
public chart6Datasets: Array<any> = [
  {data: [300, 50, 100, 40, 120]}];

public chart1Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
public chart2Labels: Array<any> = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
public chart3Labels: Array<any> = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
public chart4Labels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];
public chart5Labels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];
public chart6Labels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

public chart1Colors: Array<any> = [
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
public chart2Colors: Array<any> = [
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
public chart3Colors: Array<any> = [
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
public chart4Colors: Array<any> = [{
  hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
  hoverBorderWidth: 0,
  backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
  hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
}];

public chart5Colors: Array<any> = [{
  hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
  hoverBorderWidth: 0,
  backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
  hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
}];
public chart6Colors: Array<any> = [{
  hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
  hoverBorderWidth: 0,
  backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
  hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774']
}];

public chartOptions: any = {
  responsive: true
};

  constructor() { }

  ngOnInit() {
  }

}
