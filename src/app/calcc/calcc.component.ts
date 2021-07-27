import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcc',
  templateUrl: './calcc.component.html',
  styleUrls: ['./calcc.component.css']
})
export class CalccComponent implements OnInit {

  userInput: any = "";
  result: any = "";
  operandOne: any = "";
  operandTwo: any = "";
  operator: any = "";
  calculated: any = "";

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
    this.userInput = this.userInput + num;
    // store the operand one
    this.operandOne = parseFloat(this.userInput);
    console.log("operand one", this.operandOne)
    // if (num === "." || this.userInput === "") {
    //   return;
    // }
    const lastKey = this.userInput[this.userInput.length - 1]
    // if (lastKey === '.') {
    //   // this.userInput = this.userInput.substr(0, this.userInput.length - 1);
    //   return
    // }
    // if(num==="." && lastKey==="." && this.operandOne.inclues(".")|| this.operandTwo.inclues(".")){
    //   return
    // }


  }


  pressOperator(oprate: any) {
    const lastKey = this.userInput[this.userInput.length - 1]
    console.log("laast key", lastKey)
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === "%") {
      // if last key is an operand  then retrun nothing
      return;
    }
    //store the operator
    this.operator = oprate
    console.log("operator", this.operator)

    this.userInput = this.userInput + oprate;

  }

  getAnswer() {


    // this.operandTwo = parseFloat(this.userInput.split(this.operator)[1])
    
    console.log("operator two", this.operandTwo);
    this.calculated = this.userInput
    this.result = eval(this.userInput)
    
    // if (this.operator === "+") {
    //   this.result = this.operandOne + this.operandTwo;
    // }
    // else if (this.operator === "+") {
    //   this.result = (this.operandOne + this.operandTwo);
    // }
    // else if (this.operator === "-") {
    //   this.result = (this.operandOne - this.operandTwo);
    // }
    // else if (this.operator === "*") {
    //   this.result = (this.operandOne * this.operandTwo);
    // }
    // else if (this.operator === "/") {
    //   this.result = (this.operandOne / this.operandTwo);
    // }
    if (this.operator === "%") {
      this.result = (this.operandOne * this.operandTwo) / 100;
    }
   




  }
  backSpace() {
    this.userInput = this.userInput.substr(0, this.userInput.length - 1);
    this.result = ""

  }
  negative() {
    this.userInput = - Math.abs(this.userInput);
    console.log(this.userInput)
    


  }

  ngOnInit(): void {

  }



}

