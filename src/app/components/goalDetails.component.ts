import {Component} from '@angular/core';
import {GoalService} from '../services/goal.service';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
templateUrl:'../views/goalDetails.component.html',
styleUrls:['../../css/goalDetails.component.css', '../../css/addGoal.component.css']
})

export class GoalDetailsComponent{
    goalDescr:string;
    goalTitle:string;

  constructor(private goalService:GoalService, private route:ActivatedRoute, private router:Router){
    var index=this.route.snapshot.params['index'];
    this.goalDescr=this.goalService.goalDetailsArray[this.route.snapshot.params['index']].descr;
   this.goalTitle= this.goalService.goalDetailsArray[this.route.snapshot.params['index']].title;
  }
  
  navigateHome(){
   this.router.navigate(['/home']); 
  }
}