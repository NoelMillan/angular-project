import { Observable } from 'rxjs';
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
  inputFilter = "";
  inputFilterLower = this.inputFilter.toLowerCase();
  centerIndex = 0;
  data: any;
  basicOptions: any;

  locations = ["Málaga", "Sevilla", "Almería", "Granada"]

  constructor(public centersService: CentersService) {
    this.centersService.getCenters().subscribe(data => this.centers = data.filter(center => center.location.toLowerCase().includes(this.inputFilterLower)))
  }

  ngOnInit() {
    /*this.data = {
        datasets: [{
            data: [
                1740,
                1545,
                1030,
                1323,
            ],
            backgroundColor: [
                "pink",
                "grey",
                "firebrick",
                "#26C6DA",
            ],
            label: 'My dataset'
        }],
        labels: this.locations
    };*/
}

  valueChange(){
    this.centerIndex = 0;
    this.inputFilterLower = this.inputFilter.toLowerCase();
    this.centersService.getCenters().subscribe(data => this.centers = data.filter(center => center.location.toLowerCase().includes(this.inputFilterLower)))
    console.log(this.centers)
  }
}
