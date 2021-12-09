import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppComponent } from './app.component';
import { MdbAngularMobileModule } from 'mdb-angular-mobile';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { Routes } from '@angular/router';
import { HomeComponent } from '~/app/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
];

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        MdbAngularMobileModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [AppComponent, HomeComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
