import { Component, Output, EventEmitter } from '@angular/core';
import { Plan } from 'src/app/models/plan';


@Component({
  selector: 'main-fastingplan',
  templateUrl: './fastingplan.component.html',
  styleUrls: ['./fastingplan.component.scss']
})
export class FastingplanComponent {

  plans: Plan[] = [
    { id: 1, name: "13:11" },
    { id: 1, name: "16:8" },
    { id: 1, name: "18:6" },
    { id: 1, name: "20:4" }
  ]

  @Output() selectPlanEvent: EventEmitter<any> = new EventEmitter<any>()
  handler = (payload: any) => {
    let plan_id = payload.target.value
    this.selectPlanEvent.emit({ id: plan_id })
  }
}


