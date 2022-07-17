import { SelectorListContext } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { IScene } from '../iscene';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class Escena implements OnInit {
  @Input('parentData') public scenes: IScene[] = [];
  private currentScene: number = 0;
  private imgBasePath: string = '../assets/img/';

  constructor() { }

  ngOnInit(): void {
  }

  public prev = () => {
    this.currentScene === 0 ? this.currentScene = this.scenes.length - 1 : this.currentScene--;
  }

  public next = () => {
    this.currentScene === this.scenes.length - 1 ? this.currentScene = 0 : this.currentScene++;
  }

  public getCurrentScene = () => this.currentScene;
  public getImgBasePath = () => this.imgBasePath;

}
