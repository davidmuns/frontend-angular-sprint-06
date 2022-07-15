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
  private currentScene: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  prev() {
    if (this.currentScene == 0)
      this.currentScene = this.stories.length - 1;
    else
      this.currentScene--;
  }

  next() {
    if (this.currentScene == this.stories.length - 1)
      this.currentScene = 0;
    else
      this.currentScene++;
  }

  getCurrentScene = () => this.currentScene;

}
