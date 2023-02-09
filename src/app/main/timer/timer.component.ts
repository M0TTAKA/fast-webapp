import { Component, ViewChild } from '@angular/core';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';

@Component({
  selector: 'main-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})

export class TimerComponent {
  @ViewChild('basicTimer', { static: true }) basicTimer: CdTimerComponent;

  btnStart(action: string) {
    this.basicTimer.start();
    console.log("Timer button was started")

  }
  btnStop(action: string) {
    this.basicTimer.stop();
    console.log("Timer button was stopped")
  }


}




function start() {
  throw new Error('Function not implemented.');
}

