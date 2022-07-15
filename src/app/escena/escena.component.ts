import { SelectorListContext } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { IStory } from './../istory';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {
  @Input('parentData') public stories: IStory[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
