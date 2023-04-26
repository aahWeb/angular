import { Component, OnInit } from '@angular/core';
import { PASTRIES } from '../mock-pastries';
import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss'],
})
export class PastriesComponent implements OnInit {
  pastries: Pastrie[] = PASTRIES;
  titlePage: string = 'Page principale : liste des pâtisseries à gagner';

  constructor(){
    console.log("Constructor")
  }

  ngOnInit(): void {
    console.log("Monter dans le DOM ...")
  }
}
