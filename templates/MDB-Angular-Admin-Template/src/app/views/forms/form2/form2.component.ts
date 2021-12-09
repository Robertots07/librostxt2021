import { MDBDatePickerComponent } from 'ng-uikit-pro-standard';

import { UploadFile, UploadInput, UploadOutput } from 'ng-uikit-pro-standard';
import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter } from '@angular/core';
import { ClockPickerComponent } from 'ng-uikit-pro-standard';
import { humanizeBytes } from 'ng-uikit-pro-standard';
import {Observable, Subject} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit, AfterViewInit {


  constructor() {
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;

  }

  // File import
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  model: string;
  visibility: boolean;
  // Autocomplete
  state: string;
  public searchStr: string;

  searchText = new Subject();
  results: Observable<string[]>;
  data: any = [
    'red',
    'green',
    'blue',
    'cyan',
    'magenta',
    'yellow',
    'black',
  ];


  // Time picker
  @ViewChild('darkPicker', {static: true}) darkPicker: ClockPickerComponent;
  @ViewChild('datePicker', {static: true}) datePicker: MDBDatePickerComponent;

  range: any = 50;

  ngOnInit() {
    this.results = this.searchText.pipe(
        startWith(''),
        map((value: string) => this.filter(value))
    );
  }
  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.data.filter((item: string) => item.toLowerCase().includes(filterValue));
  }

  ngAfterViewInit() {
    setTimeout(() => this.darkPicker.setHour('15'), 0);
    setTimeout(() => this.datePicker.onUserDateInput('2017-10-13'), 0);

  }

  coverage() {
    if (typeof this.range === 'string' && this.range.length !== 0) {
      return this.range;
    }
  }

  showFiles() {
    let files = '';
    for (let i = 0; i < this.files.length; i++) {
      files += this.files[i].name;
      if (!(this.files.length - 1 === i)) {
        files += ', ';
      }
    }
    return files;
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: '/upload',
      method: 'POST',
      data: { foo: 'bar' },
    };

    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id });
  }

  onUploadOutput(output: UploadOutput | any): void {

    if (output.type === 'allAddedToQueue') {
    } else if (output.type === 'addedToQueue') {
      this.files.push(output.file); // add file to array when added
    } else if (output.type === 'uploading') {
      // update current data in files array for uploading file
      const index = this.files.findIndex(file => file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
    this.showFiles();
    console.log(output);
  }

}
