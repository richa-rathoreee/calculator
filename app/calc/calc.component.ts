import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  userInput: any = "";
  result: any = "result";
  operandOne: any = "";
  operandTwo: any = "";
  operator: any = "";

  constructor() {

  }
  // cleaar the screen
  clearScreen() {
    this.userInput = ""
    this.result = ""
  }
  //key press function
  pressKey(num: any) {
    console.log(num);
    this.userInput = this.userInput + num
    this.operandOne = parseFloat(this.userInput);
    console.log("operand one", this.operandOne)

  }
  pressOperator(oprate: any) {
    const lastKey = this.userInput[this.userInput.length - 1]
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+') {
      // if last key is an operand  then retrun nothing
      return;
    }
    this.operator = oprate
    console.log("operator", this.operator)

    this.userInput = this.userInput + oprate;

  }

  getAnswer() {
    this.operandTwo=parseFloat(this.userInput.split(this.operator)[1])
    // 
    console.log("operator two",this.operandTwo)

  }
  backSpace(){
    this.userInput=this.userInput.substr(0, this.userInput.length-1)
  }

  ngOnInit(): void {

  }

}
