import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GrandChildComponent } from "./grand-child/grand-child.component";

@Component({
  selector: 'app-second-child',
  standalone: true,
  imports: [GrandChildComponent],
  templateUrl: './second-child.component.html',
  styleUrl: './second-child.component.css'
})
export class SecondChildComponent {
  @Input() counter!: number;
  @Output() sNumberChange = new EventEmitter<number>();
  sNumber: number = this.counter -1
}
