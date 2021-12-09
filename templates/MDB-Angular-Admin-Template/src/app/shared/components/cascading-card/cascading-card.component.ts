import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'cascading-card',
  templateUrl: './cascading-card.component.html',
  styleUrls: ['./cascading-card.component.scss']
})
export class CascadingCardComponent implements OnInit {

  @Input() headerType = '';
  @Input() title = '';
  @Input() alignment = 'center';
  @Input() src = '';
  constructor() { }

  ngOnInit() {
  }

}
