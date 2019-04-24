import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'gabs',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1, 'Watch Avengers: End Game', "Catch it at a nearby theater", new Date(2019,8,28)),
    new Goal(2, "Sell mail stamps", "Aim at reaching all the denizens of Sucsville", new Date(2019,10,18)),
    new Goal(3, "Polish brass placements", "The goal is intricate stuff", new Date(2019,5,9)),
    new Goal(4, "Practise shooting hoops", "Get better at it than all the neighbourhood hoodlums", new Date(2019,1,14)),
    new Goal(5, "Entertain the cats", "Any soul can do it, right?", new Date(2019,11,4))
    ]

    completeGoal(isComplete, index){
      if(isComplete){
        this.goals.splice(index, 1);
      }
    }

    toogleDetails(index){
      this.goals[index].showDescription = !this.goals[index].showDescription;
    }
  constructor() { }

  ngOnInit() {
  }

}
