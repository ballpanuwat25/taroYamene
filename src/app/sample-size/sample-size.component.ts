import { Component, OnInit } from '@angular/core';
import { TaroYameneService } from '../taro-yamene.service';

@Component({
  selector: 'app-sample-size',
  templateUrl: './sample-size.component.html',
  styleUrls: ['./sample-size.component.css']
})
export class SampleSizeComponent implements OnInit {
  response: any;

  populationSize: number = 0;
  samplingError: number = 0;

  sampleSize: number = 0;
  conditionDesc: string = '';

  constructor(private taroYameneService: TaroYameneService) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.calculateSampleSize();
  }

  calculateSampleSize() {
    this.taroYameneService.calculateSampleSize(this.populationSize, this.samplingError).subscribe(result => {
      this.response = result.body;
      this.sampleSize = this.response.result.sampleSize;
      this.conditionDesc = this.response.result.conditionDesc;
    });
  }
}
