import { Component } from '@angular/core';
import { PastriesService } from '../pastries.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  perPage: number = 3; // nombre de patisseries par page
  currentPage: number = 1;
  numberPages: number = 0;
  total: number = 0;
  pages: number[] = [];

  constructor(private ps: PastriesService) {
    this.total = this.ps.count();
    this.numberPages = Math.ceil(this.total / this.perPage);
    // Array est un generateur de nombre en puissance 
    this.pages = [ ...Array(this.numberPages).keys() ].map( page => page + 1 )
  }

  next() {
    this.currentPage = (this.currentPage  == this.numberPages) ? 1 : this.currentPage + 1;
  }

  previous() {
    this.currentPage = (this.currentPage  == 1) ? this.numberPages : this.currentPage - 1;
  }

  selectedPage(page : number){
    this.currentPage = page;
  }

}
