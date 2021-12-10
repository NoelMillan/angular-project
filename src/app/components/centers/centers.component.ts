import { CentersService } from './../../services/centers.service';
import { Center } from './../../models/center';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.scss']
})
export class CentersComponent implements OnInit {

  centers: Center[] = [];
  centersLocation: string[] = [];
  singleLocation: any;
  inputFilter = "";
  inputFilterLower = this.inputFilter.toLowerCase();
  centerIndex = 0;

  constructor(public centersService: CentersService) {
    this.centersLocation = this.centersService.centers.map(center => center.location);
    this.singleLocation = [... new Set(this.centersLocation)]
    this.centers = this.centersService.centers.filter(center => center.location.toLowerCase().includes(this.inputFilterLower));
  }

  ngOnInit(): void {
    }

  valueChange(){
    this.inputFilterLower = this.inputFilter.toLowerCase();
    this.centers = this.centersService.centers.filter(center => center.location.toLowerCase().includes(this.inputFilterLower));
    console.log(this.centers)
  }
}
