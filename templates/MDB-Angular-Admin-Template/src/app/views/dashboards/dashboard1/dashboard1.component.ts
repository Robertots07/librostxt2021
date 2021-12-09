import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  public chartType = 'line';

  public chartDatasets: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40], label: '#1'},
    {data: [28, 80, 40, 69, 36, 37, 110], label: '#2'},
    {data: [38, 58, 30, 90, 45, 65, 30], label: '#3'}
  ];

  public chart1Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: 'rgba(255,255,255,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,255,255,1)'
    },
    {
      backgroundColor: 'rgba(151,187,205,0.1)',
      borderColor: 'rgba(151,187,205,1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(151,187,205,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(151,187,205,1)'
    }
  ];

  public dateOptionsSelect: any[];
  public bulkOptionsSelect: any[];
  public showOnlyOptionsSelect: any[];
  public filterOptionsSelect: any[];

  public chartOptions: any = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#5b5f62',
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }]
    }
  };

  constructor() {
    this.dateOptionsSelect = [
      { value: '1', label: 'Today' },
        { value: '2', label: 'Yesterday' },
        { value: '3', label: 'Last 7 days' },
        { value: '4', label: 'Last 30 days' },
        { value: '5', label: 'Last week' },
        { value: '6', label: 'Last month' }
    ];

    this.bulkOptionsSelect = [
      { value: '1', label: 'Delete' },
    { value: '2', label: 'Export' },
    { value: '3', label: 'Change segment' }
    ];

    this.showOnlyOptionsSelect = [
      { value: '1', label: 'All (2000)' },
    { value: '2', label: 'Never opened (200)' },
    { value: '3', label: 'Opened but unanswered (1800)' },
    { value: '4', label: 'Answered (200)' },
    { value: '5', label: 'Unsunscribed (50)' }
    ];

    this.filterOptionsSelect = [
      { value: '1', label: 'Contacts in no segments (100)' },
      { value: '2', label: 'Segment 1  (2000)' },
      { value: '3', label: 'Segment 2  (1000)' },
      { value: '4', label: 'Segment 3  (4000)' }
    ];
  }

  ngOnInit() {
  }

}
