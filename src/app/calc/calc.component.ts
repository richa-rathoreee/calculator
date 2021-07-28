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
  pressKey(num: any) {
    console.log(num);
    this.userInput = this.userInput + num;
    // store the operand one
    this.operandOne = parseFloat(this.userInput);
    console.log("operand one", this.operandOne)
    if (this.userInput[this.userInput.length - 1] === ".") {

      return;

    }

    this.getAnswer();

    if (this.userInput.length > 10) {
      const input = document.getElementById("userinput") as HTMLElement
      const res = document.getElementById("res") as HTMLElement

      console.log(input);
      console.log(res);

      // input.setAttribute("style", "fontSize:1em")
      input.style.fontSize = "18px"
      input.className = "wrap"
      // res.setAttribute("style", "fontSize:1.5em")
      res.style.fontSize = "25px"

    }

  }


  pressOperator(oprate: any) {
    const lastKey = this.userInput[this.userInput.length - 1]
    console.log("laast key", lastKey)
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === "%") {
      // if last key is an operand or . then retrun nothing
      return;
    }
    if (this.userInput == "" && (oprate === "/" || oprate === "*" || oprate === "%" || oprate === "+")) {
      return
    }

    //store the operator
    this.operator = oprate;
    console.log("operator", this.operator)

    this.userInput = this.userInput + oprate;

  }


  // get the result of expression
  getAnswer() {
    console.log(this.userInput)
    console.log(this.operator)
    this.inputArr = this.userInput.split(this.operator);
    console.log(this.inputArr.indexOf("%"))
    console.log(this.inputArr);
    let operator1 = parseFloat(this.inputArr[0])
    for (let i = 0; i <= this.inputArr.length - 1; i++) {
      let operator2 = parseFloat(this.inputArr[i + 1]);
      if (this.operator == "%") {
        if (!operator2) {
          console.log("sd;")
          operator1 = operator1 / 100;
          this.result = operator1;
          break;

        }
        else {
          operator1 = this.result * operator2
          this.result = operator1
          break;
        }

      }
      // console.log("i", this.inputArr[i]);
      // console.log("i+1", this.inputArr[i + 1])
      // console.log();



    }
    this.result = eval(this.userInput);



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


    this.userInput = +this.userInput * -1;






  }

  ngOnInit(): void {

  }

}
