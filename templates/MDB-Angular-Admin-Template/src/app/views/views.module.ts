import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { Chart1Component } from './charts/chart1/chart1.component';
import { Chart2Component } from './charts/chart2/chart2.component';
import { Table2Component } from './tables/table2/table2.component';
import { Chart3Component } from './charts/chart3/chart3.component';
import { ModalsComponent } from './modals/modals.component';
import { TypographyComponent } from './css/typography/typography.component';
import { IconsComponent } from './css/icons/icons.component';
import { Map1Component } from './maps/map1/map1.component';
import { Map2Component } from './maps/map2/map2.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LockComponent } from './pages/lock/lock.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { Form1Component } from './forms/form1/form1.component';
import { Form2Component } from './forms/form2/form2.component';
import { StatsCardComponent } from './dashboards/common/stats-card/stats-card.component';
import { StatsCard2Component } from './dashboards/common/stats-card2/stats-card2.component';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboards/dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboards/dashboard3/dashboard3.component';
import { Dashboard4Component } from './dashboards/dashboard4/dashboard4.component';
import { Dashboard5Component } from './dashboards/dashboard5/dashboard5.component';
import { GridComponent } from './css/grid/grid.component';
import { MediaObjectComponent } from './css/media-object/media-object.component';
import { UtilitiesComponent } from './css/utilities/utilities.component';
import { ImagesComponent } from './css/images/images.component';
import { ColorsComponent } from './css/colors/colors.component';
import { ShadowComponent } from './css/shadow/shadow.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { PanelsComponent } from './components/panels/panels.component';
import { ListsComponent } from './components/lists/lists.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProgressBarsComponent } from './components/progress-bars/progress-bars.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TagsComponent } from './components/tags/tags.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TimePickerComponent } from './components/time-picker/time-picker.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { PopoversComponent } from './components/popovers/popovers.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { PostListingComponent } from './pages/post-listing/post-listing.component';
import { Form3Component } from './forms/form3/form3.component';
import { Profile1Component } from './profile/profile1/profile1.component';
import { Profile2Component } from './profile/profile2/profile2.component';
import { Profile3Component } from './profile/profile3/profile3.component';
import { Map3Component } from './maps/map3/map3.component';
import { Settings1Component } from './settings/settings1/settings1.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { HelpComponent } from './help/help.component';
import { Settings2Component } from './settings/settings2/settings2.component';
import { Settings3Component } from './settings/settings3/settings3.component';
import { TestComponent } from './test/test/test.component';
import { SectionsComponent } from './sections/sections.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'AIzaSyCb44fZMVNTqsA7phK5chbOolMgsJl9mFw'
    }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  declarations: [
    FooterComponent,
    BasicTableComponent,
    Chart1Component,
    Chart2Component,
    Table2Component,
    Chart3Component,
    ModalsComponent,
    TypographyComponent,
    IconsComponent,
    Map1Component,
    Map2Component,
    LoginComponent,
    RegisterComponent,
    LockComponent,
    PricingComponent,
    Form1Component,
    Form2Component,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    Dashboard4Component,
    Dashboard5Component,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,
    ButtonsComponent,
    CardsComponent,
    PanelsComponent,
    ListsComponent,
    PaginationComponent,
    ProgressBarsComponent,
    TabsComponent,
    TagsComponent,
    CollapseComponent,
    DatePickerComponent,
    TimePickerComponent,
    TooltipsComponent,
    PopoversComponent,
    CustomersComponent,
    SinglePostComponent,
    PostListingComponent,
    Form3Component,
    Profile1Component,
    Profile2Component,
    Profile3Component,
    Map3Component,
    Settings1Component,
    EventCalendarComponent,
    HelpComponent,
    Settings2Component,
    Settings3Component,
    TestComponent,
    SectionsComponent
  ],
  exports: [
    FooterComponent,
    BasicTableComponent,
    Chart1Component,
    Chart2Component,
    Table2Component,
    Chart3Component,
    ModalsComponent,
    TypographyComponent,
    IconsComponent,
    Map1Component,
    Map2Component,
    Map3Component,
    LoginComponent,
    RegisterComponent,
    LockComponent,
    PricingComponent,
    Form1Component,
    Form2Component,
    StatsCardComponent,
    StatsCard2Component,
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    Dashboard4Component,
    Dashboard5Component,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,
    ButtonsComponent,
    CardsComponent,
    PanelsComponent,
    ListsComponent,
    PaginationComponent,
    ProgressBarsComponent,
    TabsComponent,
    TagsComponent,
    CollapseComponent,
    DatePickerComponent,
    TimePickerComponent,
    TooltipsComponent,
    PopoversComponent,
    CustomersComponent,
    SinglePostComponent,
    PostListingComponent,
    Form3Component
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
