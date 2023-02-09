import { Component, ViewChild } from '@angular/core';
import { CdTimerModule } from 'angular-cd-timer';

@Component({
  selector: 'main-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],

})

@ViewChild('basicTimer')
export class TimerComponent {

  btnStart() {
    console.log("Timer button was started")

  }
  btnStop() {
    console.log("Timer button was stopped")
  }


}




function start() {
  throw new Error('Function not implemented.');
}

