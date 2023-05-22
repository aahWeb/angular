import { Injectable } from '@angular/core';
import { List, Pastrie } from './pastrie';
import { INGREDIENTS_LISTS, PASTRIES } from './mock-pastries';


@Injectable({
  providedIn: 'root'
})
export class PastriesService {
  private pastries : Pastrie[] = PASTRIES;
  private ingredientsList : List[] = INGREDIENTS_LISTS;

  constructor() { }

  getPastries(): Pastrie[]{
    return this.pastries.sort((a, b) => b.quantity - a.quantity )
  }

  search(word : string): Pastrie[]{

    return this.pastries;
  }


}
