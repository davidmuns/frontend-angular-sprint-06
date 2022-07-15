import { IStory } from './../istory';
import { SelectorListContext } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import storiesJson from '../stories.json'


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {
  public stories: IStory[] = storiesJson;
  constructor() { }

  ngOnInit(): void {
  }

}
