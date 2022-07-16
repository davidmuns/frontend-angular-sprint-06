import { SelectorListContext } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { IScene } from '../iscene';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {
  @Input('parentData') public scenes: IScene[] = [];
  private currentScene: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  prev() {
    this.currentScene === 0 ? this.currentScene = this.scenes.length - 1 : this.currentScene--;
  }

  next() {
    this.currentScene === this.scenes.length - 1 ? this.currentScene = 0 : this.currentScene++;
  }

  getCurrentScene = () => this.currentScene;

}
