import { Injectable } from '@angular/core';
import { List, Pastrie } from './pastrie';
import { INGREDIENTS_LISTS, PASTRIES } from './mock-pastries';


@Injectable({
  providedIn: 'root'
})
export class PastriesService {
  private pastries: Pastrie[] = PASTRIES;
  private ingredientsList: List[] = INGREDIENTS_LISTS;

  private numberPastries :number = 0 ;

  constructor() { 
    this.numberPastries = this.pastries.length
  }

  getPastries(): Pastrie[] {
    return this.pastries.sort((a, b) => b.quantity - a.quantity)
  }

  search(word: string): Pastrie[] {
    const re = new RegExp(word.trim(), 'i');

    return this.pastries.filter(p => p.name.match(re));
  }

  paginate(start: number, end: number) {

    return this.getPastries().slice(start, end);
  }

  count():number{
    return this.numberPastries;
  }

}
