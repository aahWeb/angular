import { Component } from '@angular/core';
import { PastriesService } from '../pastries.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  word : string = '';

  constructor(private ps : PastriesService){
    // console.log(ps.getPastries());
  }

  onSubmit(form : NgForm){
    console.log(form.value ) 
  }
}
