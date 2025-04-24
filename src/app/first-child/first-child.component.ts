import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-child',
  standalone: true,
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent {
  @Input() counter!: number;
}
