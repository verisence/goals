import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { CountdownPipe } from './countdown.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { AlertsService } from './alert-service/alerts.service';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    CountdownPipe,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
