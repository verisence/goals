import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'gabs',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1, 'Watch Avengers: End Game', "Catch it at a nearby theater"),
    new Goal(2, "Sell mail stamps", "Aim at reaching all the denizens of Sucsville"),
    new Goal(3, "Polish brass placements", "The goal is intricate stuff"),
    new Goal(4, "Practise shooting hoops", "Get better at it than all the neighbourhood hoodlums"),
    new Goal(5, "Entertain the cats", "Any soul can do it, right?")
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
