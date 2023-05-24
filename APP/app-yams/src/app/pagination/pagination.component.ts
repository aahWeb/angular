import { Component, EventEmitter, Output } from '@angular/core';
import { PastriesService } from '../pastries.service';
import { Paginate } from '../pastrie';

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
  @Output() paginate: EventEmitter<Paginate> = new EventEmitter();

  constructor(private ps: PastriesService) {
    this.total = this.ps.count();
    this.numberPages = Math.ceil(this.total / this.perPage);
    // Array est un generateur de nombre en puissance 
    this.pages = [ ...Array(this.numberPages).keys() ].map( page => page + 1 )
  }

  next() {
    this.currentPage = (this.currentPage  == this.numberPages) ? 1 : this.currentPage + 1;
    this.paginate.emit(this.calculPaginate(this.currentPage));
  }

  previous() {
    this.currentPage = (this.currentPage  == 1) ? this.numberPages : this.currentPage - 1;
    this.paginate.emit(this.calculPaginate(this.currentPage));
  }

  selectedPage(page : number){
    this.currentPage = page;
    this.paginate.emit(this.calculPaginate(this.currentPage));
  }

  calculPaginate(page : number):Paginate{
    const start = (page - 1) * this.perPage;
    const end = start + this.perPage ;

    return {start, end};
  }

}
