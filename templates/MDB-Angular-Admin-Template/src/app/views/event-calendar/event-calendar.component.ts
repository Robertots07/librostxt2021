import { Component, OnInit } from '@angular/core';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {

  view = 'month';
  viewDate: Date = new Date();

  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };

  actions: CalendarEventAction[] = [

    {
      label: '<i class="fas fa-fw fa-times red-text"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  events: CalendarEvent[] = [
    {
      start: new Date(),
      end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
      title: 'A 3 day event',
      color: this.colors.red,
      actions: this.actions,
      draggable: true
    },
    {
      start: new Date(),
      title: 'An event with no end date',
      color: this.colors.yellow,
      actions: this.actions,
      draggable: true
    },
    {
      start: new Date(Date.now() + 1000 * 60 * 60 * 24 * 21),
      end: new Date(Date.now() + 1000 * 60 * 60 * 24 * 60),
      title: 'A long event that spans 2 months',
      color: this.colors.blue,
      draggable: true
    },
    {
      start: new Date(),
      title: 'A draggable and resizable event',
      color: this.colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen = true;

  refresh: Subject<any> = new Subject();

  constructor() { }

  ngOnInit() {
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (Date.parse(date.toDateString()) === Date.parse(this.viewDate.toDateString()) && this.activeDayIsOpen || events.length === 0) {
      this.activeDayIsOpen = false;
    } else {
      this.activeDayIsOpen = true;
      this.viewDate = date;
    }
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log(action, event);
  }

}
