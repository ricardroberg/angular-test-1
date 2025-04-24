import { Component, Input } from '@angular/core';
import { FirstChildComponent } from "./first-child/first-child.component";
import { SecondChildComponent } from "./second-child/second-child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstChildComponent, SecondChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  counter: number = 0
  title = 'test-project';
  @Input() sNumberChange!: number;

  addNumber() {
    this.counter += 1
  }

  removeNumber() {
    this.counter -= 1
  }

  handleGrandChildNumberChange(event: number) {
    console.log("sNumberChange ===> ", event)
    this.sNumberChange = event
  }
}


