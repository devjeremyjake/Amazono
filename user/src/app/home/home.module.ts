import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

import { HomeComponent } from './home.component';

import { ComponentsModule } from '../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [ HomeComponent ],
    exports: [ HomeComponent ],
    providers: []
})
export class HomeModule { }
