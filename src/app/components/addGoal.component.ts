import {Component,Output,Input,EventEmitter} from '@angular/core'
import {GoalService} from '../services/goal.service';
@Component({
selector: 'add-goal',
templateUrl:'../views/addGoal.component.html',
styleUrls:['../../css/addGoal.component.css']
})

export class AddGoalComponent{
    @Input() editGoalData;
    @Input() saveAddToggleButton;
    @Output() addClick= new EventEmitter();

    goalDetails:Array<any>=[];
    title:string;
    description:string;
    saveAddToggle:boolean = false;
    index:number;

    constructor(private goalService:GoalService){ }

    addGoal(){
     this.goalDetails.push({
        title:this.title,
        descr:this.description
    });
    
    this.addClick.emit(this.goalDetails);
    this.goalService.populateGoals(this.goalDetails);
    this.clearGoals();
    }

    modifyGoals (goalObj ,index){
        this.saveAddToggle = true;
        this.title = goalObj.title;
        this.description = goalObj.descr;
        this.index = index;        
    }

    saveGoal(){
     this.goalDetails[this.index].title=this.title;
     this.goalDetails[this.index].descr=this.description;
     this.addClick.emit(this.goalDetails);
     this.goalService.populateGoals(this.goalDetails);
     this.clearGoals();
     this.saveAddToggle=false;
    }

    
    clearGoals(){
     this.title="";
     this.description ="";
    }
}