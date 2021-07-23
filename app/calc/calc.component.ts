import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  userInput: any = "input";
  result: any = "result";

  constructor() {

  }
  // cleaar the screen
  clearScreen() {
    this.userInput = ""
    this.result = ""
  }
  //key press function
  pressKey(num:any) {
    console.log(num);
    this.userInput=num
  }
   ngOnInit(): void {
     
  }

}
