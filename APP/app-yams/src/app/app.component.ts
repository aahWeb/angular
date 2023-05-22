import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-yams';
  numbers : number[] = [1, 2, 3, 6];

  onSelect(num : number):void{
    console.log(num);
  }
}
