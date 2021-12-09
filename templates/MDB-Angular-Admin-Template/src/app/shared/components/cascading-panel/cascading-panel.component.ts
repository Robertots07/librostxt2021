import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'cascading-panel',
  templateUrl: './cascading-panel.component.html',
  styleUrls: ['./cascading-panel.component.scss']
})
export class CascadingPanelComponent implements OnInit {

  @Input() headerType = '';
  @Input() title = '';
  @Input() panelClass = '';
  @Input() alignment = 'center';
  constructor() { }

  ngOnInit() {
  }

}
