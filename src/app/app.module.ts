import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdTimerModule } from 'angular-cd-timer';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { FormComponent } from './main/form/form.component';
import { SummaryComponent } from './main/summary/summary.component';
import { FastingplanComponent } from './main/fastingplan/fastingplan.component';
import { FastComponent } from './main/fast/fast.component';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './main/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    FormComponent,
    SummaryComponent,
    FastingplanComponent,
    FastComponent,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CdTimerModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
