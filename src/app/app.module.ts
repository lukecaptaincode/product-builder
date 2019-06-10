import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import '../assets/styles';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../../node_modules/materialize-css/dist/js/materialize.min';
import {ProductBuilderComponent} from './components/productbuilder.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        AppComponent,
        ProductBuilderComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [HttpClientModule],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {
    constructor(){
    }
}