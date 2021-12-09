import { ToastService } from 'ng-uikit-pro-standard';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {


  constructor(private toastrService: ToastService) {}
    showSuccess() {
      this.toastrService.success('Info message');
    }
    showError() {
      this.toastrService.error('Warning message');
    }
    showInfo() {
      this.toastrService.info('Success message');
    }

    showWarning() {
      this.toastrService.warning('Error message');
    }

    showTopLeft() {
      const options = { positionClass: 'md-toast-top-left' };
      this.toastrService.info('Info message', '', options);
    }
    showTopCenter() {
      const options = { positionClass: 'md-toast-top-center' };
      this.toastrService.info('Info message', '', options);
    }
    showTopFullWidth() {
      const options = { positionClass: 'md-toast-top-full-width' };
      this.toastrService.info('Info message', '', options);
    }
    showTopRight() {
      const options = { positionClass: 'md-toast-top-right' };
      this.toastrService.info('Info message', '', options);
    }
    showBottomLeft() {
      const options = { positionClass: 'md-toast-bottom-left' };
      this.toastrService.info('Info message', '', options);
    }
    showBottomCenter() {
      const options = { positionClass: 'md-toast-bottom-center' };
      this.toastrService.info('Info message', '', options);
    }
    showBottomFullWidth() {
      const options = { positionClass: 'md-toast-bottom-full-width' };
      this.toastrService.info('Info message', '', options);
    }
    showBottomRight() {
      const options = { positionClass: 'md-toast-bottom-right' };
      this.toastrService.info('Info message', '', options);
    }

  ngOnInit() {
  }

}
