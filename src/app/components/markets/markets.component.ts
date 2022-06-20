import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent implements OnInit {

  public marketArray: any [] = [];

  constructor(private http: HttpClient) {
    this.http.get('assets/datamarket_productos_de_supermercados_2021_03_carrefour.csv', {responseType: 'text'})
    .subscribe(data => {
      let csvToRowArray = data.split("\n");
      for (let index = 1; index < csvToRowArray.length - 1; index++) {
        let row = csvToRowArray[index].split(",");
        this.marketArray.push(row);
      }
      console.log(this.marketArray)
    },
    error => {
      console.log(error)
    })
  }

  ngOnInit(): void {
  }

}
