import { Component,Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-objetive-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './objetive-card.component.html',
  styleUrl: './objetive-card.component.scss'
})
export class ObjetiveCardComponent {
  @Input() objetivo: any;
}
