import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
    map = {
        lat: 51.678418,
        lng: 7.809007,
    };
    public chart1Type = 'line';

    public chart1Datasets: Array<any> = [
        {data: [12465, 13459, 12480, 12481, 14456, 11455, 10440], label: 'Visits'}
    ];

    public chart1Labels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

    public chart1Colors: Array<any> = [
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
            backgroundColor: 'rgba(151,187,205,0.2)',
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

    public chart1Options: any = {
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
