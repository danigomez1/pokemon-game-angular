import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  arrayPunts: any

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.arrayPunts = JSON.parse(localStorage.getItem('scores')) || [];
  }

}
