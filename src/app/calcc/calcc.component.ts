import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcc',
  templateUrl: './calcc.component.html',
  styleUrls: ['./calcc.component.css']
})
export class CalccComponent implements OnInit {
  userInput: any = "";
  result: any = "";
  operator: any = "";
  inputArr: any = [];

  constructor() {


  }
  // cleaar the screen
  clearScreen() {
    this.userInput = ""
    this.result = "";
    this.operator = ""

  }
  //key number press function
  pressKey(key: any) {
    this.userInput += key;
    console.log(this.userInput);
    
    if (key === "%" || key === "*" || key === "/" || key === "+" || key === "-") {
      this.operator = key
      console.log(this.operator);
    }
    const lastKey = this.userInput[this.userInput.length - 1]
    console.log("laast key", lastKey)
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === "%") {
      // if last key is an operand or . then retrun nothing
      return;
    }
    if (this.userInput == "" && (key === "/" || key === "*" || key === "%" || key === "+")) {
      return
    }
    this.getAnswer()


  }




  // get the result of expression
  getAnswer() {
    this.inputArr = this.userInput.split(this.operator);
    console.log(this.inputArr)
    let operandOne = parseFloat(this.inputArr[0])
    console.log(operandOne);
    for (let i = 0; i <= this.inputArr.length - 1; i++) {
      console.log(i, this.inputArr[i]);
      console.log(i + 1, this.inputArr[i + 1])
      let num = parseFloat(this.inputArr[i + 1]);
      if (this.operator === "%") {
        if (!num) {
          operandOne = operandOne / 100;
          this.inputArr[0]=operandOne
          console.log(this.inputArr[i])
          console.log(operandOne);
          break;
        }
        else {
          operandOne = operandOne * num / 100;
          this.inputArr[0]=operandOne
          console.log(this.inputArr[i])

          console.log(operandOne);
          break;

        }

      }
      else{
      operandOne=eval(this.userInput)
      this.result=operandOne;
      }

    }

  }
  showAns() {
    const res = document.getElementById("res") as HTMLElement
    res.style.fontSize = "50px"
    this.userInput = ""
  }
  backSpace() {
    this.userInput = this.userInput.substr(0, this.userInput.length - 1);
    this.result = "";

  }
  negative() {


  }

  ngOnInit(): void {

  }

}
