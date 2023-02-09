import { Component } from '@angular/core';

@Component({
  selector: 'main-fast',
  templateUrl: './fast.component.html',
  styleUrls: ['./fast.component.scss']
})
export class FastComponent {
  btnStat() {
    console.log("Statistic was clicked")
  }
  btnSummary() {
    console.log("Summary was clicked")
  }
  btnPlan() {
    console.log("Plan was clicked")
  }



  showSummary() {
    console.log("Summary was shown")
  }
  plan = 'Select your Fasting Plan below';
  selectPlan(item: string) {
    console.warn(item)
    console.log("Plan was selected")
    this.plan = item;
  }


  show = true
  showPlan() {

  }

  plans = [
    {
      id: 1,
      name: "13:11"
    },
    {
      id: 2,
      name: "16:8"
    },
    {
      id: 3,
      name: "18:6"
    },
    {
      id: 4,
      name: "20:4"
    }
  ]



}
