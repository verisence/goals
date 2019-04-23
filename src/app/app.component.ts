import { Component } from '@angular/core';
import { Goal } from './goal';


// COMPONENT ANNOTATION add functionality to our code
@Component({
  selector: 'gibs',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// COMPONENT DEFINITION CLASS normal js for logic
export class AppComponent {
  //constructor(){}
  // goal = 'Watch Finding Nemo'
  // goals: string[];

  // constructor(){
  //   this.goals = ["Watch Finding Nemo","Go to the mall","Weed the flowers"]
  // }

  goals = [
    new Goal(1, 'Watch Avengers: End Game', 0),
    new Goal(2, "Sell mail stamps", 1),
    new Goal(3, "Polish brass placements", 0),
    new Goal(4, "Practise shooting hoops", 1),
    new Goal(5, "Entertain the cats", 0)
    ]
}
