import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  @Input() public tog: boolean = false;
  constructor() {}

  ngOnInit(): void {
    console.log(`ng oninit: ${this.tog}`);
  }
}
