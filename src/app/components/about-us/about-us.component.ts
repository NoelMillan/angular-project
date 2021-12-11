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
      {status: 'Productivity', color: '#9C27B0'},
      {status: 'Efficiency', color: '#673AB7'},
      {status: 'Empathy', color: '#FF9800'},
      {status: 'Teamwork', color: '#607D8B'}
  ];
  }

}
