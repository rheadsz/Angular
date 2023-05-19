import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { TechComponent } from './tech/tech.component';


const appRoutes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'click', component: TechComponent},

];




@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    WelcomeComponent,
    RoomsListComponent,
    TechComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
