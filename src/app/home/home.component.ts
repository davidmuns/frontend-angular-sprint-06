import { Component, Input, OnInit } from '@angular/core';
import scenesJson from '../scenes.json'
import { IScene } from '../iscene';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  @Input() public scenes: IScene[] = scenesJson;
  constructor() { }

  page: boolean = false;

  ngOnInit(): void {

  }

  switchPage() {
    this.page = true;
  }

}
