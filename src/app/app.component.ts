import { Component } from '@angular/core';


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
  goals: string[];

  constructor(){
    this.goals = ["Watch Finding Nemo","Go to the mall","Weed the flowers"]
  }
}
