import { ModalComponent } from './components/modal/modal.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alerts/alert/alert.component';
import { CascadingPanelComponent } from './components/cascading-panel/cascading-panel.component';
import { CascadingCardComponent } from './components/cascading-card/cascading-card.component';
import { OverlayCardComponent } from './components/overlay-card/overlay-card.component';
import { PanelComponent } from './components/panel/panel.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationService } from './components/notification/notification.service';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
  ],
  declarations: [
    AlertComponent,
    CascadingPanelComponent,
    CascadingCardComponent,
    OverlayCardComponent,
    PanelComponent,
    ModalComponent,
    NotificationComponent,
  ],
  exports: [
    MDBBootstrapModulesPro,
    CascadingPanelComponent,
    CascadingCardComponent,
    OverlayCardComponent,
    PanelComponent,
    ModalComponent,
    NotificationComponent,
  ],
  providers: [
    NotificationService
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
