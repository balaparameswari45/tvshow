import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllshowComponent } from './allshow/allshow.component';
import { ServiceallshowService } from './serviceallshow/serviceallshow.service';
import { HttpClientModule } from '@angular/common/http';
import { AllshowsearchComponent } from './allshowsearch/allshowsearch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AllshowComponent,
    AllshowsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule, 
    MatFormFieldModule, 
    MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule
  ],
  providers: [ServiceallshowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
