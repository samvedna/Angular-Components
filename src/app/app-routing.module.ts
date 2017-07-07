import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGoalComponent } from './components/addGoal.component';
import { GoalHomeComponent } from './components/goalHome.component';
import { GoalDetailsComponent } from './components/goalDetails.component';


const routes: Routes = [
  { path: 'addGoal', component: AddGoalComponent } ,
  { path: 'home', component: GoalHomeComponent } ,
   { path: 'goalDetails/:index', component: GoalDetailsComponent },
  { path: '', redirectTo:'/home',pathMatch:'full' } ,
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
