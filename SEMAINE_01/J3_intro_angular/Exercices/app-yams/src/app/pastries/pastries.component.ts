import { Component, OnInit } from '@angular/core';
import { PASTRIES, Max } from '../mock-pastries';
import { Pastrie, PreferencePastries } from '../pastrie';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss'],
})
export class PastriesComponent implements OnInit {
  pastries: Pastrie[] = PASTRIES;
  titlePage: string = 'Page principale : liste des pâtisseries à gagner';
  preferencePastries: PreferencePastries[] = [];
  count: number = 0;

  foo: string = 'hello';
  currentPastrie: Pastrie | null = null;

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('Monter dans le DOM ...');
  }

  // (click) = récupère la pastrie
  onSelect(pastrie: Pastrie) {
    console.log(pastrie);

    this.currentPastrie = pastrie;
  }

  changeParentPreference($event: string) {
    console.log($event);

    const pastrie: Pastrie | undefined = this.pastries.find(
      (p) => p.id == $event
    );

    if (pastrie) {
      pastrie.choice = !pastrie.choice;

      if (pastrie.choice && this.count < Max) this.count++;
      if (!pastrie.choice && this.count > 0 ) this.count--;

      console.log(this.count);
    }
  }
}
