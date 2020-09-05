import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Week 22';
  
  counter = 0;

  OnCoolButtonClick(){
    this.counter++ ;
    if (this.counter % 5 == 0){
      this.title = "fizzbuzz"
    }
    else if (this.counter % 2 == 0){
      this.title = "Fizz"
    }
    else this.title = "Buzz"
  }
}
