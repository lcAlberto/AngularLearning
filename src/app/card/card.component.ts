import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({
    required: true
  }) planName: string = ''
  @Input() planDescription: string = ''
  @Input() planPrice: string = ''
  @Input() planTips: Array<string> = [
    '20 team members',
    'Plan team meetings',
    'File sharing'
  ]
}
