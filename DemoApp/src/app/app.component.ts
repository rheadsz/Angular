import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  [x: string]: any;
  title = 'DemoApp';
  serverElements: any = [];
  newServerName = '';
  newServerContent = '';
  constructor(){

  }

  onAddServer(){
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
      
  }
  onAddBlueprint(){
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
  ngOnInit(): void {
    
  }
}
