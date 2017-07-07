import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { AddGoalComponent } from './components/addGoal.component';
import { GoalDetailsComponent } from './components/goalDetails.component';
import { GoalHomeComponent } from './components/goalHome.component';
import {GoalService} from './services/goal.service';

@NgModule({
  declarations: [
    AppComponent,
    AddGoalComponent,
    GoalDetailsComponent,
    GoalHomeComponent      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GoalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
