import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Home',
  moduleId: module.id,
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  loremIpsumText = `Some quick example text to build on the panel title and make up the bulk of the panel's content.`;
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }
}
