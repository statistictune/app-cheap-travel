
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { AuthComponent } from './auth/auth.component';
import { PlaceComponent } from './place/place.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HomeComponent } from './home/home.component';
import { PlaceDialogComponent } from "./place/place-dialog/place-dialog.component";

@NgModule({
    declarations: [
        AppComponent,
        FullComponent,
        AppHeaderComponent,
        SpinnerComponent,
        AuthComponent,
        PlaceComponent,
        HomeComponent
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DemoMaterialModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
        RouterModule.forRoot(AppRoutes),
        AppSidebarComponent,
        NgApexchartsModule,
        PlaceDialogComponent
    ]
})
export class AppModule { }
