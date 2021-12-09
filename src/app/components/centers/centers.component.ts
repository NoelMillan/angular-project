import { CentersService } from './../../services/centers.service';
import { Center } from './../../models/center';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.scss']
})
export class CentersComponent implements OnInit {

  centers: Center [] = [];
  center: Center = {id: 0, location: "", name: "", description: "", img: "", interactivePoints: 0, reviews: 0}
  centerIndex = 0;

  constructor(private centersService: CentersService) {
    this.centers = this.centersService.centers;
  }

  ngOnInit(): void {
  }

}
