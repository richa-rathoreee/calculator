import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  userInput: any = "";
  result: any = "";
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
  //key number press function
  pressKey(num: any) {
    console.log(num);
    this.userInput = this.userInput + num;
    // store the operand one
    this.operandOne = parseFloat(this.userInput);
    console.log("operand one", this.operandOne)

  }


  pressOperator(oprate: any) {
    const lastKey = this.userInput[this.userInput.length - 1]
    console.log("laast key", lastKey)
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === "%" || lastKey===".") {
      // if last key is an operand or . then retrun nothing
      return;
    }
    //store the operator
    this.operator = oprate
    console.log("operator", this.operator)
  
    this.userInput = this.userInput + oprate;

  }
  

// get the result of expression
  getAnswer() {

    // this.operandTwo = parseFloat(this.userInput.split(this.operator)[1]);
    // this eval will evaluate the expression
    this.result = eval(this.userInput)
    if (this.operator === "%") {
      this.result = (this.operandOne * this.operandTwo) / 100;
    }
  }

  backSpace() {
    this.userInput = this.userInput.substr(0, this.userInput.length - 1);
    this.result = "";

  }
  negative() {
    // this.userInput=Number(this.userInput)
    // this.userInput =  Math.abs(+this.userInput);
    this.userInput= +this.userInput* -1
    console.log(typeof this.userInput, this.userInput)
    

    


  }

  ngOnInit(): void {

  }

}
