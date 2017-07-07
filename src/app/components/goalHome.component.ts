import { Component ,ViewChild} from '@angular/core';
import { AddGoalComponent } from './addGoal.component';
import {Router} from '@angular/router';

@Component({
  selector: 'goal-home',
  templateUrl: '../views/goalHome.component.html',
  styleUrls: ['../../css/app.component.css']
})

export class GoalHomeComponent {
  title = 'app';
  hideGoalComponent:boolean;
  showTiles:boolean;
  goalData:any;
  editedGoalData:any;

  @ViewChild(AddGoalComponent) editGoal:AddGoalComponent;

  editGoals(goalObj,index){
    this.editGoal.modifyGoals(goalObj,index);
    this.hideGoalComponent = false;
  }

  constructor(private router:Router){
    this.hideGoalComponent = true;
    
  } 

    showGoalComponent(){
    this.hideGoalComponent = false;
    }

  handleAddGoalEvent(event){
    this.hideGoalComponent = true;
    this.goalData=event;
  }

  goalDetails(goal,index){
       this.router.navigate(['/goalDetails',index]);
  }

}
