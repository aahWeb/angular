import { Component, Input } from '@angular/core';
import { Pastrie } from '../pastrie';
import { INGREDIENTS_LISTS as ingredients } from '../mock-pastries';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss'],
})
export class PastrieDetailsComponent {
  @Input() bar: string = '';
  @Input() pastrie: Pastrie | null = null;

  getIngredients(id: string): string[] | null {
    const i = ingredients.find(i => i.id == id) ;

    if(i) return i.list ;
    
    return null ;
  }
}
