import { Component, Output, Input, EventEmitter } from '@angular/core';
import { VStatistic } from 'src/app/models/vstatistic';
import { VStatisticsService } from 'src/app/service/vstatistics.service';

@Component({
  selector: 'main-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private vstatisticsService: VStatisticsService
  ) { }
  @Input() vstatistic: VStatistic = {
    id: 0,
    date: "",
    weight: 0
  }

  @Output() formEvent: EventEmitter<VStatistic> = new EventEmitter<VStatistic>()
  addStat() {

    let o = { ...this.vstatistic }

    this.vstatisticsService.save(o).subscribe((savedvstatistic) => {
      this.formEvent.emit(savedvstatistic)
      console.log("Statistic was added")

    })
  }
}

