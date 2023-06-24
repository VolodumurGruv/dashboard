import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public tog = false;
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.tog = !this.tog;
    console.log(this.tog);
  }
}
