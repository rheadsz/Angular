import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'betaApp';
  
  serverElements: any[] = [{type: 'server', name: 'testserver', content: 'Just a test!'}];
  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
      
  }
  onBlueprintAdded(bpcreated: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: bpcreated.serverName,
      content: bpcreated.serverContent
    });
  }
  constructor(){

  }

  ngOnInit(): void {
    
  }
}
