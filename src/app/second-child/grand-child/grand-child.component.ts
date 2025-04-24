import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  imports: [],
  standalone: true,
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.css'
})
export class GrandChildComponent {
  @Input() sNumber!: number;
  @Output() sNumberChange = new EventEmitter<number>();
  gChildNUmber = this.sNumber

  addNumber() {
    this.sNumber += 1;
    this.sNumberChange.emit(this.gChildNUmber)
  }

  removeNumber() {
    this.sNumber -= 1;
    this.sNumberChange.emit(this.gChildNUmber)
  }
}
