import {Injectable} from '@angular/core';

@Injectable()

export class GoalService{
goalDetailsArray: Array<any>=[];

populateGoals(data){
    this.goalDetailsArray = data;
}


}