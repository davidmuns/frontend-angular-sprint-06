import { Component, Input, OnInit } from '@angular/core';
import scenesJson from '../scenes.json'
import { IScene } from '../iscene';

@Component({
  selector: 'app-home',
  template: `<app-escena [parentData]="scenes"></app-escena>`
})
export class HomeComponent implements OnInit {
  @Input() public scenes: IScene[] = scenesJson;
  constructor() { }

  ngOnInit(): void {
  }

}
