import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  events: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.events = [
      {status: 'Productividad', color: '#9C27B0'},
      {status: 'Eficiencia', color: '#673AB7'},
      {status: 'Empatía', color: '#FF9800'},
      {status: 'Cooperación', color: '#607D8B'}
  ];
  }

}
