import { Component, Input, OnInit } from '@angular/core';
import storiesJson from '../stories.json'
import { IStory } from './../istory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() public stories: IStory[] = storiesJson;
  constructor() { }

  ngOnInit(): void {
  }

}
