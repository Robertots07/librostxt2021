import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard5',
  templateUrl: './dashboard5.component.html',
  styleUrls: ['./dashboard5.component.scss']
})
export class Dashboard5Component implements OnInit {

  public chartType = 'line';

  public chartDatasets: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: '#1'},
    {data: [28, 48, 10, 69, 36, 37, 110], label: '#2'}
  ];

  public chart1Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderColor: 'rgba(255,255,255,1)',
      borderWidth: 1,
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,255,255,1)'
    },
    {
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderColor: 'rgba(255,255,255,1)',
      borderWidth: 1,
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,255,255,1)'
    }
  ];

  public chartOptions: any = {
    responsive: true,
    legend: {
      labels: {
        fontColor: 'white',
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: 'white',
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: 'white',
        }
      }]
    }
  };

  public dateOptionsSelect: any[];
  public rowsOptionsSelect: any[];

  public checkModel1: any = {
    first: true,
    second: false,
    third: false,
    fourth: false
  };

  public checkModel2: any = {
    first: true,
    second: false,
    third: false,
    fourth: false,
    fifth: false
  };

  constructor() {
    this.dateOptionsSelect = [
      { value: '1', label: 'Today' },
      { value: '2', label: 'Yesterday' },
      { value: '3', label: 'Last 7 days' },
      { value: '4', label: 'Last 30 days' },
      { value: '5', label: 'Last week' },
      { value: '6', label: 'Last month' },
      { value: '6', label: 'Previous week' },
      { value: '6', label: 'Previous month' },
      { value: '6', label: 'Custom date' }
    ];

    this.rowsOptionsSelect = [
      { value: '1', label: '5 rows' },
      { value: '2', label: '25 rows' },
      { value: '3', label: '50 rows' },
      { value: '4', label: '100 rows' }
    ];
  }

  ngOnInit() {
  }

}
