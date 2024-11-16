import { Component,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-objetive-buttom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-objetive-buttom.component.html',
  styleUrl: './add-objetive-buttom.component.scss'
})
export class AddObjetiveButtomComponent {
  @Output() openForm = new EventEmitter<void>();
}
