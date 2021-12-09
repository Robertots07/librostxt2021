import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {

  constructor() { }

  getAds() {
    return [
      {
        title: 'New sale',
        body: 'You have just earned 250$',
        options: { closeButton: true, tapToDismiss: false, progressBar: true}
      },
      {
        title: 'Abandoned cart',
        body: 'Someone abandoned his cart.',
        options: {progressBar: true,  timeOut: 3000,  toastClass: 'black' }
      },
      {
        title: 'Your business is growing',
        body: 'Today you have earned 500$ more than yesterday',
        options: { closeButton: true, tapToDismiss: false, progressBar: true, positionClass: 'toast-bottom-right' }
      },
      {
        title: 'Weekly summary',
        body: 'Go to Quick Overview and see how\'s your businnes doing',
        options: { closeButton: true, tapToDismiss: false, progressBar: true, positionClass: 'toast-bottom-right' }
      },
        {
        title: 'You haven\'t sent a newsletter for a while',
        body: 'You can improve your sales by reaching your clients directly. Let them know about news from your business.',
        options: { closeButton: true, tapToDismiss: false, progressBar: true, positionClass: 'toast-bottom-right' }
      },
      {
        title: 'New customers',
        body: 'You\'ve got 5 new customers today.',
        options: { closeButton: true, tapToDismiss: false, progressBar: true, positionClass: 'toast-bottom-right' }
      },
      {
        title: 'Hey, how\'s your day?',
        body: 'You were absent yesterday. See what you missed on Sales Dashboard.'
,        options: { closeButton: true, tapToDismiss: false, progressBar: true }
      },
    ];
  }
}
