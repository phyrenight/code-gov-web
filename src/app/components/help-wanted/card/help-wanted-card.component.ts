import { Component, Input } from '@angular/core';
import { HelpWantedItem } from '../help-wanted-item.model';

@Component({
  selector: 'help-wanted-card',
  styles: [require('./help-wanted-card.styles.scss')],
  template: require('./help-wanted-card.template.html')
})

export class HelpWantedCardComponent {
  @Input() private item: HelpWantedItem;
}
