import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styles: [
    `img {
      filter: brightness(0);
      /* width: 275px;
      height: 200px; */
    }`,
    `.cover { object-fit: cover; }`,
    `.show { filter: brightness(1); }`,
    `.red-background { background-color: red; }`
  ]
})
export class PokemonViewComponent implements OnInit {

  @Input() url: string = '';
  @Input() show: boolean = true;
  @Input() width: number = 275;
  @Input() height: number = 200;
  @Input() adjust: boolean = false;

  backgroundRed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  ratoliSobre() {
    this.height = 100;
    this.width = 100;
  }
  ratoliFora() {
    this.height = 200;
    this.width = 275;
  }
  dobleClick() {
    this.backgroundRed = !this.backgroundRed;
    if (this.width > 200) {
      this.width = 100;
      this.height = 100;
    } else {
      this.width = 275;
      this.height = 200;
    }
  }
}
