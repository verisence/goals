import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'gabs',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals = [
    new Goal(1, 'Watch Avengers: End Game', 0),
    new Goal(2, "Sell mail stamps", 1),
    new Goal(3, "Polish brass placements", 0),
    new Goal(4, "Practise shooting hoops", 1),
    new Goal(5, "Entertain the cats", 0)
    ]

  constructor() { }

  ngOnInit() {
  }

}
