import { Component, Input, OnInit } from '@angular/core';
import scenesJson from '../scenes.json'
import { IScene } from '../iscene';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class Home implements OnInit {
  @Input() public scenes: IScene[] = scenesJson;
  private switch: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
  public switchOn = () => this.switch = true;
  public getSwitch = () => this.switch;
}


